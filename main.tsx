/** @jsx h */
import { serve } from 'https://deno.land/std@0.139.0/http/server.ts';
import { h, ssr } from 'https://crux.land/nanossr@0.0.4';
import { Client } from 'https://deno.land/x/postgres@v0.15.0/mod.ts';
import { ENVS } from './dbEnvs.ts';
import { Comment } from './types.ts';
import { App } from './components/App.tsx';

const client = new Client({
  user: 'postgres',
  database: 'postgres',
  hostname: ENVS.hostName,
  password: ENVS.password,
  port: ENVS.port,
});

const connection = client.connect();

const createComment = async (req: Request) => {
  const form = await req.formData();
  await client.queryObject(
    'insert into Comments (name, comment) values ($1, $2)',
    [form.get('name'), form.get('comment')]
  );
  return new Response('', { status: 303, headers: { Location: '/' } });
};

const getComments = async () => {
  const result = await client.queryObject<Comment>('select * from Comments');
  return result;
};

serve(async (req) => {
  await connection;

  if (req.method === 'POST') return await createComment(req);

  const result = await getComments();

  return ssr(() => <App comments={result.rows} />);
});
