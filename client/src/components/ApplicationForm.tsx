import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateRequest } from "@/hooks/use-requests";
import { insertRequestSchema } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";

// Extend schema for frontend validation messages if needed, or use as is
const formSchema = insertRequestSchema.extend({
  phone: z.string().min(10, "Введите корректный номер телефона"),
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
});

type FormValues = z.infer<typeof formSchema>;

export function ApplicationForm() {
  const { mutate, isPending } = useCreateRequest();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      citizenship: "",
      age: undefined,
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <section id="contact" className="section-padding bg-secondary/30 relative">
      <div className="container-width max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-xl border-t-4 border-t-primary overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 bg-primary p-8 text-primary-foreground flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold mb-4 uppercase">Оставить заявку</h3>
                  <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                    Заполните форму, и наш специалист свяжется с вами для бесплатной консультации по вопросам заключения контракта.
                  </p>
                  
                  <div className="space-y-4 mt-8">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/60 mb-1">Телефон</p>
                      <p className="text-lg font-bold">+7 999 095-55-59</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/60 mb-1">Режим работы</p>
                      <p className="text-lg font-bold">Круглосуточно</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative background circle */}
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              </div>

              <div className="md:col-span-3 p-8 bg-white">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ФИО *</FormLabel>
                          <FormControl>
                            <Input placeholder="Иванов Иван Иванович" className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Телефон *</FormLabel>
                            <FormControl>
                              <Input placeholder="+7 (999) 000-00-00" className="bg-background" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Возраст (полных лет)</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                placeholder="35" 
                                className="bg-background" 
                                {...field} 
                                onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="citizenship"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Гражданство</FormLabel>
                          <FormControl>
                            <Input placeholder="РФ / Иное" className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Дополнительная информация (необязательно)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Ваши вопросы или комментарии..." 
                              className="bg-background min-h-[100px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full text-lg h-12 font-bold uppercase tracking-wide bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                      disabled={isPending}
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Отправка...
                        </>
                      ) : (
                        <>
                          Отправить заявку
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      Нажимаю кнопку, вы даете согласие на обработку персональных данных.
                    </p>
                  </form>
                </Form>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
