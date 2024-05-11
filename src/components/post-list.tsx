// import { getAllPosts } from "@/server/data/post";
// import { formatDistanceToNow } from "date-fns";
// import {
//   Card,
//   CardDescription,
//   CardFooter,
//   CardHeader,
// } from '@/components/ui/card';

// export const PostList = async () => {
//   const posts = await getAllPosts();

//   return (
//     <div className="flex gap-8">
//       {posts.map((post) => (
//         <Card key={post.id}>
//           <CardHeader>
//             <CardDescription className="text-primary">
//               {post.text}
//             </CardDescription>
//           </CardHeader>
//           <CardFooter className="border-t px-6 py-4 text-xs">
//             <p className="text-muted-foreground">
//               {formatDistanceToNow(new Date(post.createdAt), {
//                 addSuffix: true,
//               })}
//             </p>
//           </CardFooter>
//         </Card>
//       ))}
//     </div>
//   );
// };
