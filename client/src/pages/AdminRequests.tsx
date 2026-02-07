import { useQuery, useMutation } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Trash2 } from "lucide-react";
export default function AdminRequests() {
  const { data: requests } = useQuery<any[]>({ queryKey: ["/api/admin/requests"] });
  
  const deleteReq = useMutation({
    mutationFn: (id: number) => apiRequest("DELETE", `/api/admin/requests/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["/api/admin/requests"] })
  });
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Заявки</h1>
      <Table>
        <TableHeader><TableRow>
          <TableHead>Имя</TableHead><TableHead>Телефон</TableHead><TableHead>Удалить</TableHead>
        </TableRow></TableHeader>
        <TableBody>
          {requests?.map(r => (
            <TableRow key={r.id}>
              <TableCell>{r.name}</TableCell><TableCell>{r.phone}</TableCell>
              <TableCell>
                <Button variant="ghost" onClick={() => confirm("Удалить?") && deleteReq.mutate(r.id)}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}