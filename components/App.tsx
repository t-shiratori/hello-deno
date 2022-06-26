/** @jsx h */
import { h } from 'https://crux.land/nanossr@0.0.4';
import { Comment } from '../types.ts';

export function App(props: { comments: Comment[] }) {
  return (
    <div class="px-8 py-4">
      <h1 class="font-semibold text-2xl">Deno Board</h1>
      <p class="mt-2 text-gray-500">Welcome to Deno Board!</p>
      <ul class="mt-4">
        {props.comments.map((comment) => (
          <li>
            {comment.name} &gt; {comment.comment}{' '}
            <span class="text-gray-500 text-sm">
              ({comment.date.toLocaleString('ja')})
            </span>
          </li>
        ))}
      </ul>
      <form action="/" method="POST" class="mt-4 flex gap-2">
        <input name="name" placeholder="name" class="border rounded px-2" />
        <input
          name="comment"
          placeholder="comment"
          class="border rounded px-2"
        />
        <input type="submit" value="コメント" class="rounded px-2" />
      </form>
    </div>
  );
}
