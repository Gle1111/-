import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertRequest } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateRequest() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertRequest) => {
      const validated = api.requests.create.input.parse(data);
      const res = await fetch(api.requests.create.path, {
        method: api.requests.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Ошибка валидации");
        }
        throw new Error("Не удалось отправить заявку");
      }

      return api.requests.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
        variant: "default",
        className: "bg-primary text-primary-foreground border-primary",
      });
      // In a real app we might invalidate a list of requests for admin
      // queryClient.invalidateQueries({ queryKey: [api.requests.list.path] });
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
