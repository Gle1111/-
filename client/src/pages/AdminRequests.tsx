import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Request } from "@shared/schema";
import { Loader2 } from "lucide-react";

export default function AdminRequests() {
  const { data: requests, isLoading } = useQuery<Request[]>({
    queryKey: ["/api/admin/requests"],
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Список заявок (Админ-панель)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Дата</TableHead>
                  <TableHead>Имя</TableHead>
                  <TableHead>Телефон</TableHead>
                  <TableHead>Гражданство</TableHead>
                  <TableHead>Возраст</TableHead>
                  <TableHead>Сообщение</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests?.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>
                      {request.createdAt ? new Date(request.createdAt).toLocaleString("ru-RU") : "-"}
                    </TableCell>
                    <TableCell className="font-medium">{request.name}</TableCell>
                    <TableCell>{request.phone}</TableCell>
                    <TableCell>{request.citizenship || "-"}</TableCell>
                    <TableCell>{request.age || "-"}</TableCell>
                    <TableCell className="max-w-xs truncate">{request.message || "-"}</TableCell>
                  </TableRow>
                ))}
                {requests?.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                      Заявок пока нет
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}