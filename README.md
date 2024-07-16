This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Development

## Set up
- Install [pnpm](https://pnpm.io/installation).
- Install dependencies: `pnpm i`.
- Install [Supabase CLI](https://supabase.com/docs/guides/cli/getting-started?queryGroups=platform&platform=windows)
- Install [Docker](https://docs.docker.com/engine/install/)

## Environment variables
> Use `.env.local_template` as reference and update it when a new variable is added.
> Keys values should never be stored in this file.

|Name                               |Description                                       |
|-----------------------------------|--------------------------------------------------|
| `NEXT_PUBLIC_SUPABASE_URL`          | Supabase url to call endpoints                   |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`     | Supabase key to be able to call the endpoints    |
| `NEXT_PUBLIC_SUPABASE_COOKIES`      | Cookies used by supabase to store the user token |

## Scripts
> After running the project open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

|Description                            |Command                  |
|---------------------------------------|-------------------------|
| Run development server                | `pnpm dev`              |
| Generate build                        | `pnpm build`            |
| Run build locally                     | `pnpm start`            |
| Lint project                          | `pnpm lint`             |
| Run supabase local instance           | `pnpm supa:start`       |
| Check supabase instance status        | `pnpm supa:status`      |
| Stop supabase local instance          | `pnpm supa:stop`        |

## Supabase local development

> **Requirements**
> - Install [Supabase CLI](https://supabase.com/docs/guides/cli/getting-started?queryGroups=platform&platform=windows)
> - Install [Docker](https://docs.docker.com/engine/install/)

|Description                           |Command             |
|--------------------------------------|--------------------|
| Run docker instances                 | `supabase start`   |
| Check local supabase url and keys    | `supabase status`  |



**Note*: update in env file all the `SUPABASE` variables with the local values (most of them given by the status command).*

### Migrate database from remote to local
> **Requirements**
> - Install [Postgres](https://www.postgresql.org/download/) so you can run `psql` and `pg_dump`
> - Install [Supabase CLI](https://supabase.com/docs/guides/cli/getting-started?queryGroups=platform&platform=windows)
> - Install [Docker](https://docs.docker.com/engine/install/)
> - Login to your remote supabase project: `supabase login`

1. Run the following commands to create the migration files:
    ```shell
        supabase db dump --db-url "$REMOTE_DB_URL" -f roles.sql --role-only
        supabase db dump --db-url "$REMOTE_DB_URL" -f schema.sql
        supabase db dump --db-url "$REMOTE_DB_URL" -f data.sql --use-copy --data-only
    ```
    ***Note**: change $REMOTE_DB_URL to your supabase remote db url access (similar to `postgresql://postgres.[YOUR-PROJECT]:[YOUR-PASSWORD]@aws-0-eu-west-2.pooler.supabase.com:[PORT]/postgres`)*

2. Run the outcome of this SQL files in your supabase local dashboard SQL Editor to load schemas, roles, data and more.
