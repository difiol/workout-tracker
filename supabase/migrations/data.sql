SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.7 (Ubuntu 15.7-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") FROM stdin;
00000000-0000-0000-0000-000000000000	0e4294a9-dfc0-43c1-b14b-c9a719c18baf	{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"diego@test.com","user_id":"b631b924-877c-4c34-b246-ca064f208056","user_phone":""}}	2024-06-19 19:05:17.056483+00	
00000000-0000-0000-0000-000000000000	f16a817e-6589-4b0d-94f1-5f922edee3bf	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-21 12:29:47.838228+00	
00000000-0000-0000-0000-000000000000	a3d6923d-c5e3-4811-8d05-ff85b36ffaa4	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-21 12:29:47.84441+00	
00000000-0000-0000-0000-000000000000	11be567f-b001-41b1-94ea-f044a5809f86	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-21 12:32:54.737477+00	
00000000-0000-0000-0000-000000000000	ffbdedee-acde-4ee6-848c-fb9525e4bb75	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-21 12:32:54.753763+00	
00000000-0000-0000-0000-000000000000	1e97e42f-b9fa-4f07-a12c-9f0e82c908ec	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-21 13:18:10.255411+00	
00000000-0000-0000-0000-000000000000	3bd34823-826f-4f00-982b-da92f1c0c2b5	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-21 13:18:10.263573+00	
00000000-0000-0000-0000-000000000000	511d280a-990c-41a7-a700-ad6c50fbf68f	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-21 13:18:19.359751+00	
00000000-0000-0000-0000-000000000000	ffb75182-d31d-4d2f-a8db-3ca4e2fae8b2	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-21 13:18:19.426405+00	
00000000-0000-0000-0000-000000000000	59778d51-d1b9-47bf-a1d8-81ee0e18bb1e	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-21 16:25:59.581001+00	
00000000-0000-0000-0000-000000000000	03c15469-c20a-431c-9add-81f8d4d984f2	{"action":"token_revoked","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-21 16:25:59.581878+00	
00000000-0000-0000-0000-000000000000	dacf7807-ebcc-4526-b59a-e169430973b7	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-21 16:59:45.586566+00	
00000000-0000-0000-0000-000000000000	e147e1c9-02c9-4e95-810a-edc3c383705f	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-21 16:59:48.907755+00	
00000000-0000-0000-0000-000000000000	54bbbeec-2831-4e38-a11a-0cbcd4d151f1	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-21 16:59:51.359652+00	
00000000-0000-0000-0000-000000000000	8767663f-a6bb-4f99-9cd9-5666a6ab8bdc	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-21 16:59:58.257209+00	
00000000-0000-0000-0000-000000000000	be8ee82b-8b55-4659-800c-405d6669daa9	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-22 10:34:53.479107+00	
00000000-0000-0000-0000-000000000000	d2f5175c-c01e-45ca-9d67-6f25fc1240f2	{"action":"token_revoked","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-22 10:34:53.491066+00	
00000000-0000-0000-0000-000000000000	bc506984-a0ce-431a-b2fe-eb383426ae35	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-22 10:57:35.280779+00	
00000000-0000-0000-0000-000000000000	ad21eb3c-f18e-4fb0-bc88-e49c8f647936	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-22 10:59:11.472401+00	
00000000-0000-0000-0000-000000000000	ad77ab1e-bd67-4994-b276-3d08a61c0353	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-22 11:28:27.001522+00	
00000000-0000-0000-0000-000000000000	823a2c9b-1852-419e-a805-8aafba66b643	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-22 12:10:47.336178+00	
00000000-0000-0000-0000-000000000000	e2bb8e56-4ef4-443f-963c-d24c31b9d195	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-22 12:11:51.705586+00	
00000000-0000-0000-0000-000000000000	183821cc-74b3-4fda-9d2a-b3ca970f978c	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-22 13:05:03.713904+00	
00000000-0000-0000-0000-000000000000	5644a5da-fff1-4c49-b566-5a42c255674b	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-22 13:05:15.861167+00	
00000000-0000-0000-0000-000000000000	26b637e2-17b5-4a9e-972f-3656742633ee	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-22 13:08:47.449674+00	
00000000-0000-0000-0000-000000000000	137155ed-888f-43d4-8889-1bd320775602	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-22 13:13:46.039721+00	
00000000-0000-0000-0000-000000000000	1dc263c3-7a68-4a13-8f71-bb2a7ad11e27	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-25 06:17:19.831969+00	
00000000-0000-0000-0000-000000000000	6970f064-e88a-4875-a526-6b791a292328	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-25 07:15:28.642858+00	
00000000-0000-0000-0000-000000000000	d654e667-240d-483a-835d-569285d09939	{"action":"token_revoked","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-25 07:15:28.649979+00	
00000000-0000-0000-0000-000000000000	2a4b0ddc-19c8-4e06-bf56-1e73979a25aa	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-25 16:03:52.542443+00	
00000000-0000-0000-0000-000000000000	46117fdd-d01e-4ebb-8169-7c93ffd06312	{"action":"token_revoked","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-25 16:03:52.551786+00	
00000000-0000-0000-0000-000000000000	5ba3fddd-c225-433d-9c28-9e54ab3a5cad	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-25 16:23:30.16902+00	
00000000-0000-0000-0000-000000000000	5ea81089-85a2-447c-975e-747953e632d1	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-25 16:23:40.880272+00	
00000000-0000-0000-0000-000000000000	7c50f6bc-9825-4a73-a2a6-945e65e43a1f	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-25 17:22:38.359935+00	
00000000-0000-0000-0000-000000000000	f832f0bd-eb6c-4d3e-8215-b5018e8cdb83	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-25 17:23:01.376523+00	
00000000-0000-0000-0000-000000000000	17247d57-4d00-4de0-a4ac-19f5d067eb24	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 06:44:23.497217+00	
00000000-0000-0000-0000-000000000000	30511f5e-9230-4c20-ba59-c2b371ad1923	{"action":"token_revoked","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 06:44:23.50306+00	
00000000-0000-0000-0000-000000000000	0a82ad12-1591-4b9d-8034-5ddc028a942e	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 06:44:23.540282+00	
00000000-0000-0000-0000-000000000000	3d65b1f7-d260-464a-bb6d-9eaa2adc78b8	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 06:44:25.637187+00	
00000000-0000-0000-0000-000000000000	06402264-18f0-4ec1-9ac5-d4d1d08267df	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:45:59.425228+00	
00000000-0000-0000-0000-000000000000	d6b0de70-6564-4210-88a9-a957faa11964	{"action":"token_revoked","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:45:59.437668+00	
00000000-0000-0000-0000-000000000000	d346bfb7-d4fd-404f-a52c-b9c588dfd76f	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:46:00.076168+00	
00000000-0000-0000-0000-000000000000	1c4698fd-073d-4523-8801-cadb994c9e8d	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:46:32.902853+00	
00000000-0000-0000-0000-000000000000	5e37d39d-d700-4083-86d8-00f86b35f21d	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:46:33.296252+00	
00000000-0000-0000-0000-000000000000	1c18530e-5a2a-4ad3-b57f-6532ef2053da	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:46:36.994003+00	
00000000-0000-0000-0000-000000000000	97c5ee8f-3dd9-4b89-a11d-14e4874abee8	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:46:37.427839+00	
00000000-0000-0000-0000-000000000000	7316d41c-2e38-4aa6-b93b-88437362f7b8	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:47:04.563041+00	
00000000-0000-0000-0000-000000000000	2424e360-ebbc-4f7a-b8c1-b9427a5d140f	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:47:05.057797+00	
00000000-0000-0000-0000-000000000000	300ab6bb-238e-4191-b440-ae7794793c47	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:47:17.723261+00	
00000000-0000-0000-0000-000000000000	d6cc2d68-10ba-4354-b573-84a5682a7063	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:47:18.027319+00	
00000000-0000-0000-0000-000000000000	731587d0-3eaf-4992-951d-712c61d894df	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:47:50.884743+00	
00000000-0000-0000-0000-000000000000	eb0ce8e3-9925-4c6a-b0b1-dc88f935c2d4	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:47:50.93032+00	
00000000-0000-0000-0000-000000000000	ffde2be0-8f68-4077-b611-45920ad3e594	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:47:51.276968+00	
00000000-0000-0000-0000-000000000000	d951b56e-a53c-4742-877a-b9fa097f54a5	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:47:51.360286+00	
00000000-0000-0000-0000-000000000000	1057fcc2-5c66-47fa-94e6-259f2e4ecbe2	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:50:07.563827+00	
00000000-0000-0000-0000-000000000000	a374fb80-0d07-4f9d-9e5c-1a4162d450d7	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:50:07.88676+00	
00000000-0000-0000-0000-000000000000	66a854a7-eb44-4a30-99e0-365f51f14598	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:50:25.72295+00	
00000000-0000-0000-0000-000000000000	65ee5d22-b2ab-4cb5-aa4c-05e0d9732913	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:50:26.24237+00	
00000000-0000-0000-0000-000000000000	2af61856-906f-47fe-b118-2d40cec1cc7a	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:50:55.629235+00	
00000000-0000-0000-0000-000000000000	77a9b2f9-905e-4885-b7a6-4710989add3e	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:50:55.969781+00	
00000000-0000-0000-0000-000000000000	61bea9b5-c0c0-4140-b283-ac555d61e8a7	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:52:12.46078+00	
00000000-0000-0000-0000-000000000000	83b835c6-bc36-44f8-9a0e-2e5a31db26fb	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:52:12.517691+00	
00000000-0000-0000-0000-000000000000	c449cb62-6f0d-4703-aa44-2e73c58a98b1	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:52:12.821432+00	
00000000-0000-0000-0000-000000000000	b3ae7fb4-4b36-4cac-a5a8-e0aad2eee164	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:52:12.900646+00	
00000000-0000-0000-0000-000000000000	d3bad3d6-d410-48a1-b4a2-14e4605eda71	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:52:21.830685+00	
00000000-0000-0000-0000-000000000000	a5dbebd3-fa25-488b-998f-0dd2481e6835	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:52:22.245585+00	
00000000-0000-0000-0000-000000000000	1ebb451e-d10f-4548-9d5e-2e69fd48e7ca	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:52:27.615522+00	
00000000-0000-0000-0000-000000000000	4ab54130-8a9d-472a-83c8-e655d8d19fb2	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:52:28.032122+00	
00000000-0000-0000-0000-000000000000	b47046b3-4611-4e20-8543-5b4acbe4fb08	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:53:21.607215+00	
00000000-0000-0000-0000-000000000000	c2f89e25-3795-432e-a80f-deaa31019649	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:53:21.975526+00	
00000000-0000-0000-0000-000000000000	2c9840fb-9e44-46e7-b347-69f28645e41e	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:53:28.159783+00	
00000000-0000-0000-0000-000000000000	4657f2d3-fb74-4026-874f-14bfaf2fc7b6	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:53:28.483108+00	
00000000-0000-0000-0000-000000000000	7328b581-1eb3-45d7-b6bf-3ecbecbc4207	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:54:06.275297+00	
00000000-0000-0000-0000-000000000000	6aceb839-172d-40b2-90d2-f8e63f32bdc7	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 14:54:06.581583+00	
00000000-0000-0000-0000-000000000000	494bdd33-db85-4243-a033-3c4451f0778d	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:00:28.643824+00	
00000000-0000-0000-0000-000000000000	b507bf21-048c-4af2-8ac2-dce6c7f0ec79	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:00:28.677204+00	
00000000-0000-0000-0000-000000000000	4722684d-a7cd-40d1-9c56-5587756d216b	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:00:29.005675+00	
00000000-0000-0000-0000-000000000000	ea249024-bd4d-4a23-b2ff-64590f177fd2	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:00:29.016334+00	
00000000-0000-0000-0000-000000000000	c03ddc20-9992-4696-85c9-a6b7934deebf	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:00:34.689355+00	
00000000-0000-0000-0000-000000000000	09dbafe9-ce95-4123-bc82-426e19b6e13e	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:00:35.030857+00	
00000000-0000-0000-0000-000000000000	6c046885-74c8-4e22-84fe-bebf6d4f206d	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:02:07.956431+00	
00000000-0000-0000-0000-000000000000	2ed6a8b5-2fbe-48e2-8fa3-abbee38cf403	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:02:08.262974+00	
00000000-0000-0000-0000-000000000000	4aabec56-3bce-4010-97b4-5a664d0453f4	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:06:06.730637+00	
00000000-0000-0000-0000-000000000000	3e419e37-2384-4cfa-a6cc-00f747981b06	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:06:07.350744+00	
00000000-0000-0000-0000-000000000000	dc640639-86b7-42ae-8f22-8dbe4340e9b0	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:06:31.884905+00	
00000000-0000-0000-0000-000000000000	1d7e9f4d-af1e-4ff1-98eb-cf712e958571	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:06:32.136171+00	
00000000-0000-0000-0000-000000000000	b0512562-1c29-4865-9a30-e77bc3d31af6	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:06:32.832597+00	
00000000-0000-0000-0000-000000000000	1efac6b0-3fc8-4031-ad97-7d42a765ce9d	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:06:33.143196+00	
00000000-0000-0000-0000-000000000000	84fe0615-0070-4686-8146-9071ab283a16	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:07:33.456835+00	
00000000-0000-0000-0000-000000000000	d4fa7285-da08-453b-8c40-5c3661a62d3b	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:07:33.987013+00	
00000000-0000-0000-0000-000000000000	6bebd747-c2f8-4d07-81d2-d5376ad49c32	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:07:34.376738+00	
00000000-0000-0000-0000-000000000000	a472957b-3385-43b2-87cf-c079d48dc843	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:07:34.747137+00	
00000000-0000-0000-0000-000000000000	6d4ab170-7762-4a70-9865-d40dff254535	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:08:31.799674+00	
00000000-0000-0000-0000-000000000000	99b3bed0-4548-4377-b210-7a3c1eaedcd8	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:08:32.068631+00	
00000000-0000-0000-0000-000000000000	1d2f1d3e-c577-44a5-930f-17e1b76a4658	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:09:38.786202+00	
00000000-0000-0000-0000-000000000000	15248f53-eb84-46fa-9ffe-edeee4bf1bb1	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:09:39.066169+00	
00000000-0000-0000-0000-000000000000	a4f69ca7-907b-41c4-862d-61cfa70d82cc	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:11:28.48159+00	
00000000-0000-0000-0000-000000000000	d9d8c533-6462-4e69-bb1e-82e1bf136848	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:11:28.779638+00	
00000000-0000-0000-0000-000000000000	b68180b0-3de4-47a0-ab93-1cbf48207d46	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:12:58.772586+00	
00000000-0000-0000-0000-000000000000	73273a93-30d7-4283-aede-e6e77a13132a	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:12:59.077843+00	
00000000-0000-0000-0000-000000000000	c861724f-6af1-4efb-8e78-0ea7d189f36d	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:17:19.910773+00	
00000000-0000-0000-0000-000000000000	4285eb0e-d4d2-47f3-b0f8-ceed156370fa	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:17:20.188594+00	
00000000-0000-0000-0000-000000000000	9fd67db6-b37b-49ae-b812-ac9d8770c256	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:17:23.032055+00	
00000000-0000-0000-0000-000000000000	28ba94a7-c4b7-419e-87d7-a89e1fc6ce2a	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:17:23.535754+00	
00000000-0000-0000-0000-000000000000	583b27e6-814b-489a-8c0f-8f3b1f5e494a	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:17:39.214009+00	
00000000-0000-0000-0000-000000000000	4dac02f8-6337-44bd-8010-32bdc61cd150	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:17:39.494792+00	
00000000-0000-0000-0000-000000000000	6ab2fb03-8c69-403e-a52d-959e08a92fc7	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:17:40.95115+00	
00000000-0000-0000-0000-000000000000	646f0111-b4f6-450c-a3f0-83bec7382f33	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:17:41.28396+00	
00000000-0000-0000-0000-000000000000	55695de9-3025-4d9a-97f2-073b96c6b96f	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:17:54.480552+00	
00000000-0000-0000-0000-000000000000	6462519f-62a7-419a-89d7-4cc126644b62	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:17:54.747825+00	
00000000-0000-0000-0000-000000000000	351fb402-277c-417e-8265-db61d353bc83	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:17:57.453388+00	
00000000-0000-0000-0000-000000000000	51acda79-f0e9-46ea-a6da-099581af3ef4	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:17:57.784747+00	
00000000-0000-0000-0000-000000000000	5f5f792c-d55f-4e82-bf41-5f9f5604a0f8	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:18:40.127091+00	
00000000-0000-0000-0000-000000000000	8c2fb6bf-48fe-4010-89ec-90d5a0a30b6e	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:18:40.203233+00	
00000000-0000-0000-0000-000000000000	bad0979c-cb28-4a50-872a-bb1b2c452b85	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:18:40.491906+00	
00000000-0000-0000-0000-000000000000	bee8b786-dcee-4c1f-a5b6-6b0c043a1fd5	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:18:40.565532+00	
00000000-0000-0000-0000-000000000000	0d013604-f751-4ab1-a4d8-89d41d8b345f	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:18:40.837441+00	
00000000-0000-0000-0000-000000000000	c7e657b0-7472-4f80-9279-c5e9620e52b1	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:18:41.119009+00	
00000000-0000-0000-0000-000000000000	750f5944-c2a5-40f9-a521-cf83b64df050	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:19:23.740295+00	
00000000-0000-0000-0000-000000000000	9fb7013e-44de-4600-8bdc-0e1458c92746	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:19:24.080382+00	
00000000-0000-0000-0000-000000000000	2ac108f3-5c6b-4ed9-9215-1fe46769b74f	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:19:25.728047+00	
00000000-0000-0000-0000-000000000000	aad3fb54-9cab-4e28-b37e-9640a0515767	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:19:26.132484+00	
00000000-0000-0000-0000-000000000000	f1ba3ab6-8344-4006-99c0-733d7077b6f9	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-26 15:19:29.689397+00	
00000000-0000-0000-0000-000000000000	61ab6495-d8f5-4137-9363-f4b91940e428	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-26 15:48:34.062164+00	
00000000-0000-0000-0000-000000000000	01163993-2849-475a-ba55-37f22afb6d4d	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-26 16:16:09.573994+00	
00000000-0000-0000-0000-000000000000	08e5d7cd-b390-4843-8152-d381039821b9	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-26 16:16:31.880179+00	
00000000-0000-0000-0000-000000000000	19f652b8-e2d1-4710-be88-040615ba818a	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-26 20:54:19.375092+00	
00000000-0000-0000-0000-000000000000	33e90a87-fbcb-480f-8c3c-11008c4d11ab	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-26 20:56:41.873379+00	
00000000-0000-0000-0000-000000000000	4d6ae873-ee73-4323-b17f-eb108c9ece95	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-26 21:35:01.609605+00	
00000000-0000-0000-0000-000000000000	4db3043e-4b70-405d-bb90-bbe8f7bc0646	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-26 22:15:06.575032+00	
00000000-0000-0000-0000-000000000000	cd221940-4280-45c5-b344-20fcaa2e5140	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-27 06:36:17.092461+00	
00000000-0000-0000-0000-000000000000	bed20330-a1cf-4d2b-8878-fdf24d6d95f4	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-27 06:54:37.499898+00	
00000000-0000-0000-0000-000000000000	6010cd60-2f83-4adc-9292-b8aa9f69e9d9	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-27 06:55:01.187308+00	
00000000-0000-0000-0000-000000000000	2c254792-f16f-45b6-ad75-5de738d96a1d	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-27 07:12:40.169779+00	
00000000-0000-0000-0000-000000000000	dc950a73-f4aa-40a1-88fd-681afe63c8f4	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-27 07:18:45.78558+00	
00000000-0000-0000-0000-000000000000	48299852-93ca-4bf3-a575-40d9e5b67a2c	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-27 07:19:39.808735+00	
00000000-0000-0000-0000-000000000000	8565fc73-b4bd-4bc2-a934-b4ce3a4ccbf1	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-27 07:22:50.371478+00	
00000000-0000-0000-0000-000000000000	8db90c2e-9afb-4bf0-a546-201516c468c7	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-27 07:23:01.004382+00	
00000000-0000-0000-0000-000000000000	432aacba-ef3b-4250-8be9-307647ae65bc	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-27 07:30:15.817098+00	
00000000-0000-0000-0000-000000000000	1c676cc6-bfea-44d1-a829-be5d234ec475	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-27 07:30:27.651821+00	
00000000-0000-0000-0000-000000000000	ab1a1c9c-d775-4e62-8e77-0f42e2b11e12	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-27 07:40:33.831024+00	
00000000-0000-0000-0000-000000000000	12b47bba-92f1-4061-9cf3-3f1f0d87ddff	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-27 07:40:40.494007+00	
00000000-0000-0000-0000-000000000000	6d547422-d1e8-49a6-b161-10c76993c039	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-27 07:41:24.070625+00	
00000000-0000-0000-0000-000000000000	f2e65396-2e7a-4b88-9a77-e1b38e7552db	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-27 07:41:54.510164+00	
00000000-0000-0000-0000-000000000000	ddaa95d0-d3c1-4cfe-8c7b-a02a101d5868	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-27 07:44:22.173738+00	
00000000-0000-0000-0000-000000000000	8305b523-f507-448c-a09e-21703d4e1958	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-27 07:48:48.842588+00	
00000000-0000-0000-0000-000000000000	d2869545-e867-48d2-8d40-11066333fe1d	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-27 07:49:03.994942+00	
00000000-0000-0000-0000-000000000000	3f884ce7-2426-4883-abad-ec134805db04	{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"user@test.com","user_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","user_phone":""}}	2024-06-27 09:45:31.491702+00	
00000000-0000-0000-0000-000000000000	78f14510-be83-42c6-beb0-f29c967af1cc	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-28 06:25:17.334429+00	
00000000-0000-0000-0000-000000000000	cd53c59b-1dc9-491c-82c4-f525aad71d0f	{"action":"token_revoked","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-28 06:25:17.340849+00	
00000000-0000-0000-0000-000000000000	df384c4a-482e-4ab5-9397-3654dfc9b0ab	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-28 06:25:17.367741+00	
00000000-0000-0000-0000-000000000000	4b22931b-8715-4409-b32e-1d0a2e13c4d7	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-28 06:26:13.306757+00	
00000000-0000-0000-0000-000000000000	8d6ff858-1741-42cb-a67a-4e531394f60c	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-28 06:26:13.351062+00	
00000000-0000-0000-0000-000000000000	32b60b17-a12a-4510-a46f-055b090918bb	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-28 06:27:01.178945+00	
00000000-0000-0000-0000-000000000000	4cfc90f3-dc29-41f9-b32a-28adebb7017d	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-28 06:27:01.190738+00	
00000000-0000-0000-0000-000000000000	49882975-8b12-4e5e-8f35-69aa4bf75df3	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-06-28 06:29:44.28142+00	
00000000-0000-0000-0000-000000000000	8540bb51-c5cc-4ce5-81b2-17d213cad4c1	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-28 06:29:44.48117+00	
00000000-0000-0000-0000-000000000000	78cc5d0d-6917-4e1c-92ca-03e923cf5cb1	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-28 06:33:44.954412+00	
00000000-0000-0000-0000-000000000000	22485bc7-a8fa-49b8-bc42-286d82d2279f	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-28 06:41:44.451636+00	
00000000-0000-0000-0000-000000000000	344f0a40-3fc9-4a11-9782-69ff1f1430e7	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-28 06:41:51.402675+00	
00000000-0000-0000-0000-000000000000	2a79e2e9-93b6-4192-b498-7e7465bc04d6	{"action":"logout","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-28 07:07:07.515685+00	
00000000-0000-0000-0000-000000000000	69ae30c0-4f86-45f4-9601-8ec3c40eb0f6	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-28 07:08:20.628638+00	
00000000-0000-0000-0000-000000000000	b26ebd66-c586-4fd4-8014-23dfd7a57711	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-28 07:11:44.68507+00	
00000000-0000-0000-0000-000000000000	0aba577c-6e01-4791-affc-a19416da142c	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-28 13:34:46.857317+00	
00000000-0000-0000-0000-000000000000	4a58d141-a0e8-4ea8-bba8-78443c62549e	{"action":"logout","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-28 14:26:50.83598+00	
00000000-0000-0000-0000-000000000000	6282b686-fc98-455b-bd85-c96ec36a70b0	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-28 14:30:00.699313+00	
00000000-0000-0000-0000-000000000000	895ae937-13fd-41d1-83ce-4cbb78a11f09	{"action":"logout","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-28 14:38:53.208837+00	
00000000-0000-0000-0000-000000000000	b0f0dcee-e261-4a59-9cc2-0b642a0ee686	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-28 14:39:09.674105+00	
00000000-0000-0000-0000-000000000000	f1412277-2b10-4ac8-b463-1312958901f8	{"action":"logout","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-28 14:53:49.626201+00	
00000000-0000-0000-0000-000000000000	8cfe58f6-7e37-45bd-85fd-3806a284073c	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-28 14:54:23.610748+00	
00000000-0000-0000-0000-000000000000	ced75d61-356f-475c-ac22-2ddf20b75ef6	{"action":"logout","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-28 15:50:47.269723+00	
00000000-0000-0000-0000-000000000000	df15813d-a4a6-4f19-9f7a-d3b66adb0fc4	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-28 16:01:17.571488+00	
00000000-0000-0000-0000-000000000000	09865a6d-b960-491a-9b71-09181b124fd7	{"action":"logout","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-28 16:03:00.0289+00	
00000000-0000-0000-0000-000000000000	d3bf4971-cf06-4c05-a8fc-30fc2aa33604	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-28 16:03:52.320718+00	
00000000-0000-0000-0000-000000000000	585c285b-4802-4f08-a193-8cd18c7e8462	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-28 16:05:14.716428+00	
00000000-0000-0000-0000-000000000000	a98b966c-1de4-41f4-8704-5e0f8158f0f6	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-28 16:05:36.595507+00	
00000000-0000-0000-0000-000000000000	9ddcec60-a77d-4af0-80e4-6d3f8382a9b7	{"action":"logout","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-28 16:06:06.185863+00	
00000000-0000-0000-0000-000000000000	d78f4a8a-76d0-400b-900d-3ca9708d0b0b	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-28 16:06:39.240493+00	
00000000-0000-0000-0000-000000000000	6f167041-4928-4912-b3fa-b1a048cae39c	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-28 16:19:28.148521+00	
00000000-0000-0000-0000-000000000000	120cf1b6-3271-415a-8bf2-d5e4e858ed1c	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-28 16:19:39.458245+00	
00000000-0000-0000-0000-000000000000	802fa997-347f-4a2a-a876-8575a205e4e9	{"action":"logout","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-28 16:19:43.418369+00	
00000000-0000-0000-0000-000000000000	31a3ff9b-3e7e-4503-998c-e6e02dd20620	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-28 16:19:51.041884+00	
00000000-0000-0000-0000-000000000000	9389202d-dcbf-40d2-b541-8f88d0a9bef8	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-06-29 12:09:31.224896+00	
00000000-0000-0000-0000-000000000000	c2a41c20-7e45-45d9-a307-660837f8f51a	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-06-29 12:16:45.43663+00	
00000000-0000-0000-0000-000000000000	691bc141-ae43-49d3-b218-3934590b84cc	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-01 15:51:29.112254+00	
00000000-0000-0000-0000-000000000000	14a1a91f-dec6-40fc-8eec-940b7f1772eb	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-01 15:53:20.789804+00	
00000000-0000-0000-0000-000000000000	2cc82beb-1237-4f57-9c83-d82f1b8bf698	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-01 15:53:31.810262+00	
00000000-0000-0000-0000-000000000000	3317c818-b66c-44d6-bf9d-dd41b454e9a5	{"action":"logout","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-01 15:54:35.282631+00	
00000000-0000-0000-0000-000000000000	da2222c1-4d1c-4d85-9998-de6c48d0205e	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-01 15:54:42.995221+00	
00000000-0000-0000-0000-000000000000	5333c004-0c09-4bb9-98ae-12642e7b301c	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-01 18:01:03.823227+00	
00000000-0000-0000-0000-000000000000	6f236919-79d8-4de8-93b1-24d31e437038	{"action":"token_revoked","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-01 18:01:03.828218+00	
00000000-0000-0000-0000-000000000000	b6bb4d84-66e8-413a-b36b-97e0d26c5cf8	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-01 18:01:04.30593+00	
00000000-0000-0000-0000-000000000000	8fa78d0d-13e0-4ef7-acc9-394a9d2cb816	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-01 18:01:04.525211+00	
00000000-0000-0000-0000-000000000000	b8d99e3e-e945-44ad-bd48-4a3cfbe044a0	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-01 18:01:04.812817+00	
00000000-0000-0000-0000-000000000000	64d01733-ce5f-466c-8144-5fba3c81fc13	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-01 18:01:06.083994+00	
00000000-0000-0000-0000-000000000000	e4ff71fa-c4cc-463f-854d-326949ec98ff	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-01 18:01:06.385097+00	
00000000-0000-0000-0000-000000000000	7939c55e-ad2f-4c7f-bedc-fb0774d38ad6	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-01 18:01:06.552745+00	
00000000-0000-0000-0000-000000000000	9ec87d88-990f-4bab-be9a-4a7974feda54	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-01 18:01:06.732968+00	
00000000-0000-0000-0000-000000000000	5bfea073-9bb0-416f-b81b-315445a0b340	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-01 18:01:08.546241+00	
00000000-0000-0000-0000-000000000000	fe70ba0d-10e6-4023-8a90-11186201fd1e	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-01 18:01:15.982909+00	
00000000-0000-0000-0000-000000000000	61824673-cbcd-46a8-9ab2-6849e11932bc	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-01 18:01:24.817344+00	
00000000-0000-0000-0000-000000000000	9255ee17-98de-4fc3-95de-e1b163ff1d50	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 06:56:15.922097+00	
00000000-0000-0000-0000-000000000000	2f0e93e8-bd40-4fc0-8210-8ece85926158	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 06:56:15.930437+00	
00000000-0000-0000-0000-000000000000	805a3a5b-1be3-42fc-aa9a-71382dc44096	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 06:56:16.300406+00	
00000000-0000-0000-0000-000000000000	296ee862-8848-4213-8e08-d99ee47c0881	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 06:56:16.411052+00	
00000000-0000-0000-0000-000000000000	f720e4ce-0808-4922-9824-49852f13ada2	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 06:56:16.656375+00	
00000000-0000-0000-0000-000000000000	ed5ae9d6-2e68-401b-a7e3-b5cec123793e	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 06:56:17.111067+00	
00000000-0000-0000-0000-000000000000	e56476b3-e835-4ac4-aa2f-abb8024bd25b	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 06:56:17.31966+00	
00000000-0000-0000-0000-000000000000	3637dbe7-55e4-4274-9e9f-3ad5012f6c23	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 06:56:17.427649+00	
00000000-0000-0000-0000-000000000000	bcee99f2-7ece-4de5-b15e-134af9a943f9	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 06:56:17.537844+00	
00000000-0000-0000-0000-000000000000	dc0951f1-5247-47c7-8ac8-96803f0e1c03	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 06:56:18.459055+00	
00000000-0000-0000-0000-000000000000	02359808-6ac7-4501-8b10-7d268d6b3b27	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 12:50:45.091823+00	
00000000-0000-0000-0000-000000000000	8d8fd361-2ef4-4f39-9166-a3a3d7235a29	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 12:50:45.113485+00	
00000000-0000-0000-0000-000000000000	de8c19d0-6f55-4ee6-a18c-829851f43269	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 14:07:44.794345+00	
00000000-0000-0000-0000-000000000000	abcf3e06-c084-4f1f-b6d4-9b09bd872985	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 14:07:44.797231+00	
00000000-0000-0000-0000-000000000000	dcc52601-3808-4041-a82d-d784a120325e	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 15:06:11.259743+00	
00000000-0000-0000-0000-000000000000	4821d0bb-fb0c-4a29-b367-e6fb12157165	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 15:06:11.263284+00	
00000000-0000-0000-0000-000000000000	d07e5ccc-3db1-485a-8e68-7e0e7f89acc6	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-02 15:48:03.934376+00	
00000000-0000-0000-0000-000000000000	21d1deb1-5c22-483d-bcf4-78969f3c64a1	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-02 15:48:47.272292+00	
00000000-0000-0000-0000-000000000000	a7c767d1-d074-4704-a9ca-e8cf6b78f97d	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 16:15:10.129369+00	
00000000-0000-0000-0000-000000000000	d42b77b1-1793-4d79-9aed-6afa2bbbacc0	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 16:15:10.131839+00	
00000000-0000-0000-0000-000000000000	cdb892cd-708c-4261-9dea-66185fecfa60	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 16:51:05.48684+00	
00000000-0000-0000-0000-000000000000	8e0375f9-d677-45ca-a451-2eb7faa43292	{"action":"token_revoked","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 16:51:05.49018+00	
00000000-0000-0000-0000-000000000000	67b41aee-769c-41a1-bbf5-972acb5af996	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 16:51:06.213932+00	
00000000-0000-0000-0000-000000000000	74868081-ff77-404e-89f5-e227a2dade2b	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 16:51:06.542868+00	
00000000-0000-0000-0000-000000000000	acf62685-548c-4810-bdec-063865527449	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 16:51:06.902038+00	
00000000-0000-0000-0000-000000000000	77847703-abbe-4278-a16f-a9a3a570aa11	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 16:51:57.541965+00	
00000000-0000-0000-0000-000000000000	d549a5df-cbbd-4d99-be63-2f29f300802e	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 19:30:05.038612+00	
00000000-0000-0000-0000-000000000000	de733df4-cfad-4f10-ade5-13293b68d8bd	{"action":"token_revoked","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 19:30:05.042566+00	
00000000-0000-0000-0000-000000000000	b22489c7-2c98-465d-bbde-1e4e891ad06c	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 22:36:27.810041+00	
00000000-0000-0000-0000-000000000000	7ee88158-d824-4148-8b0f-ca3d7d0670d8	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 22:36:27.813471+00	
00000000-0000-0000-0000-000000000000	d638bc41-da52-45bb-a369-916972832a58	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 22:36:28.198092+00	
00000000-0000-0000-0000-000000000000	22db716e-c319-49b6-9cc6-d5ce6257bfbc	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 22:36:28.33728+00	
00000000-0000-0000-0000-000000000000	44bac99e-c543-455c-b27c-ba85bdad4434	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 22:36:28.61514+00	
00000000-0000-0000-0000-000000000000	0edcdaf0-5f48-4323-baca-b944a3615b4e	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 22:36:30.354353+00	
00000000-0000-0000-0000-000000000000	9424bf1b-3455-4a1f-bc1c-04d8f5bac482	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 23:34:41.122483+00	
00000000-0000-0000-0000-000000000000	69155d17-b64c-4518-a749-a54c9cc23358	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-02 23:34:41.124853+00	
00000000-0000-0000-0000-000000000000	33aaa239-371c-4d24-9b3c-139f8e8d3702	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 07:35:24.29552+00	
00000000-0000-0000-0000-000000000000	164ff112-5e25-4358-b293-9c9fe58f7485	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 07:35:24.3043+00	
00000000-0000-0000-0000-000000000000	1a8ebbb1-9a57-42f3-9427-ff98186f860b	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 07:35:24.736876+00	
00000000-0000-0000-0000-000000000000	320120c5-777f-44ba-9d04-cb1e394aae07	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 07:35:24.856018+00	
00000000-0000-0000-0000-000000000000	33c361f4-2385-44d6-8ce3-0a31ddc6bf4e	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 07:35:25.111536+00	
00000000-0000-0000-0000-000000000000	045fd7f9-8d61-48d6-8386-0f67abd97e40	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 07:35:27.530333+00	
00000000-0000-0000-0000-000000000000	8719cbd6-3863-4596-8781-212dc87826f5	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 07:35:27.776359+00	
00000000-0000-0000-0000-000000000000	71da7482-726e-4d25-95b9-da30f761aee7	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 07:35:27.914604+00	
00000000-0000-0000-0000-000000000000	2c3cc2d3-9925-4deb-97db-3e87656e26ee	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 07:35:28.048754+00	
00000000-0000-0000-0000-000000000000	8a7544d3-41db-4676-ae3d-8f08de1c88f1	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 07:35:29.008067+00	
00000000-0000-0000-0000-000000000000	15ea6660-7c2d-401c-bbce-f9ae257f3b6a	{"action":"logout","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-03 07:52:06.020793+00	
00000000-0000-0000-0000-000000000000	65973404-f53f-48cc-9c6d-8e4d6b470ee4	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-03 08:12:13.628505+00	
00000000-0000-0000-0000-000000000000	6a11401f-ae82-454a-b156-e0ba56ccd894	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 09:10:13.782577+00	
00000000-0000-0000-0000-000000000000	20650545-0fb1-4990-bccf-315181fc4a76	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 09:10:13.785946+00	
00000000-0000-0000-0000-000000000000	fa8f9d56-c343-4ad9-acfb-ce369b695401	{"action":"logout","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-03 09:37:23.811761+00	
00000000-0000-0000-0000-000000000000	45936536-3bb3-4cea-abef-1bc4a6b0878e	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-03 09:37:36.870204+00	
00000000-0000-0000-0000-000000000000	7598f08e-b97d-469e-89c2-265e33ee8e13	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 11:02:56.983241+00	
00000000-0000-0000-0000-000000000000	8957bb1e-ed10-4a80-b1cf-8a6596d2ca1d	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 11:02:56.986016+00	
00000000-0000-0000-0000-000000000000	ea3d6ec3-89ef-487a-a849-8e45f661f4ad	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 12:01:21.65296+00	
00000000-0000-0000-0000-000000000000	dfe33e30-99e5-4cfd-b67f-d6e7557e7082	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 12:01:21.656579+00	
00000000-0000-0000-0000-000000000000	704def75-ce2a-4a2a-a084-85444f8a17be	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 12:59:56.296707+00	
00000000-0000-0000-0000-000000000000	064898a1-72d9-431b-8bf9-e965d967e1e5	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 12:59:56.299193+00	
00000000-0000-0000-0000-000000000000	c6924bc2-ff41-424c-9b26-eebfaf4f49d5	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 16:10:05.218705+00	
00000000-0000-0000-0000-000000000000	f4998626-5475-48a8-814b-34c8ac9c0d19	{"action":"token_revoked","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 16:10:05.220853+00	
00000000-0000-0000-0000-000000000000	027362e8-a02a-4095-b763-d0503fd2f865	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 16:10:05.773463+00	
00000000-0000-0000-0000-000000000000	0517b30d-bdc0-4683-b4ea-a256fb8a1111	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 16:10:06.10227+00	
00000000-0000-0000-0000-000000000000	8f403d58-3bf0-40b9-80a0-37ee05f088ea	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 16:10:06.466848+00	
00000000-0000-0000-0000-000000000000	f8520bdb-a15e-4315-ba8c-6bd32efd606b	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 16:10:08.184014+00	
00000000-0000-0000-0000-000000000000	9b3c55f2-55a6-4e95-a53a-1b92f47d9424	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 16:10:08.366135+00	
00000000-0000-0000-0000-000000000000	672aedd1-f99f-49ae-befe-a6969128b9bf	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 16:10:08.80746+00	
00000000-0000-0000-0000-000000000000	4d2621e7-59fe-463d-9cd9-68979cc401d5	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 16:10:09.135341+00	
00000000-0000-0000-0000-000000000000	5a89b70e-14e2-44bd-888e-7ac0d1211f86	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 16:10:09.473836+00	
00000000-0000-0000-0000-000000000000	51148991-b993-4a12-a990-e509c9ab192d	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 17:18:18.149232+00	
00000000-0000-0000-0000-000000000000	4d5d1272-adf8-4c23-abd9-7e5fbd7aedfc	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 17:18:18.152343+00	
00000000-0000-0000-0000-000000000000	3bbda661-b613-4107-a952-afd64fef4636	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 17:18:18.599047+00	
00000000-0000-0000-0000-000000000000	e4a08075-f823-41aa-bcf7-173841a68a0f	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 17:18:18.791154+00	
00000000-0000-0000-0000-000000000000	2714eb8f-128a-49d2-93fb-48192e75edf8	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 17:18:19.094687+00	
00000000-0000-0000-0000-000000000000	73d766c6-4391-48c6-b640-d9801d46132f	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 17:18:19.581047+00	
00000000-0000-0000-0000-000000000000	00519e88-d590-4cb8-bd4e-fddea6b73f82	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 17:18:19.980846+00	
00000000-0000-0000-0000-000000000000	43fe6257-8844-4715-88d1-d876859c2e74	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 17:18:20.112057+00	
00000000-0000-0000-0000-000000000000	272e2622-2214-4007-914e-53f12adc69d0	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 17:18:20.273724+00	
00000000-0000-0000-0000-000000000000	438417de-2788-40dd-9064-81f5c019249f	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 17:18:21.371765+00	
00000000-0000-0000-0000-000000000000	105705bb-1316-4324-8230-bcdda7a0661e	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 19:19:12.114417+00	
00000000-0000-0000-0000-000000000000	ad9e31cf-0aed-4769-9d50-48ad2ce2cd8e	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 19:19:12.116407+00	
00000000-0000-0000-0000-000000000000	d0ae5931-3dc3-4a24-90d5-fc0da716fcae	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 19:19:12.449609+00	
00000000-0000-0000-0000-000000000000	ec115a87-f788-4fae-bb7b-3dad282aee7a	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 19:19:12.574311+00	
00000000-0000-0000-0000-000000000000	fd52c00b-1922-4a12-8648-e0e7dc3e0dd5	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 19:19:12.821246+00	
00000000-0000-0000-0000-000000000000	791feb86-7eb1-41e3-a142-731d6b97608a	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 19:19:14.382844+00	
00000000-0000-0000-0000-000000000000	9970daad-9a80-465c-b3b1-6ec1983d2602	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 20:17:52.324924+00	
00000000-0000-0000-0000-000000000000	d03e83d2-991f-4b0d-967e-4d5796215339	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-03 20:17:52.327974+00	
00000000-0000-0000-0000-000000000000	c54d338d-539f-4423-a0bb-2e90992bf152	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 06:43:51.561417+00	
00000000-0000-0000-0000-000000000000	b892b10a-5122-4e91-9d2f-473b93642fa4	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 06:43:51.564518+00	
00000000-0000-0000-0000-000000000000	77e926e2-030e-4d25-b4c1-a3b67d748a52	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 06:43:51.927489+00	
00000000-0000-0000-0000-000000000000	a43c78c5-e0a9-4599-bfba-506395761b58	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 06:43:52.108491+00	
00000000-0000-0000-0000-000000000000	83594e48-8377-4bc8-b31b-65c72c4314f1	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 06:43:52.403545+00	
00000000-0000-0000-0000-000000000000	cfe92330-1aea-472c-9545-a14a780f867a	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 06:43:52.852357+00	
00000000-0000-0000-0000-000000000000	e6e0a5ba-34ce-4a9c-9123-37923319447d	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 06:43:53.07692+00	
00000000-0000-0000-0000-000000000000	9d14a175-ea68-4697-8152-fbd810ebcb4c	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 06:43:53.183288+00	
00000000-0000-0000-0000-000000000000	0a2a83b7-52de-4d18-9ea2-0d8f521cd0b8	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 06:43:53.29782+00	
00000000-0000-0000-0000-000000000000	9fae9ba1-0189-4a84-89e5-701e588efe9a	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 06:43:54.233434+00	
00000000-0000-0000-0000-000000000000	6c2b49a4-ab22-428b-8783-c7753f9348cd	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 14:11:56.355939+00	
00000000-0000-0000-0000-000000000000	e615a610-6ea6-4602-a0ed-d8d8d0b0cf61	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 14:11:56.361463+00	
00000000-0000-0000-0000-000000000000	2d936de5-1afb-40d9-9de3-426fe932b174	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 14:11:56.784409+00	
00000000-0000-0000-0000-000000000000	202905e8-9474-46aa-aeeb-8734da6c37b9	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 14:11:56.975278+00	
00000000-0000-0000-0000-000000000000	4cc5d029-0177-4b4d-9e2a-e04cebf7377c	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 14:11:57.252396+00	
00000000-0000-0000-0000-000000000000	342a7dad-ab96-42ad-afcc-c18fdd8a738b	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 14:11:58.280106+00	
00000000-0000-0000-0000-000000000000	ea0937e9-9697-4e1b-953c-dc528143d6b5	{"action":"logout","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-04 14:40:00.981136+00	
00000000-0000-0000-0000-000000000000	85dc0d66-1caa-4649-9c3e-58d23cd1700f	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-04 14:45:36.2128+00	
00000000-0000-0000-0000-000000000000	7dca88d6-a64d-4bd9-8e9d-f1e6dbbdeb07	{"action":"logout","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-04 14:51:33.824995+00	
00000000-0000-0000-0000-000000000000	9519bf32-e645-4249-b942-8db59b376b28	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-04 14:55:07.103355+00	
00000000-0000-0000-0000-000000000000	43bea699-46af-4877-93d8-1883e375091c	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 15:53:30.648895+00	
00000000-0000-0000-0000-000000000000	e86ab759-341b-4875-b9bd-b2d70c281776	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 15:53:30.651388+00	
00000000-0000-0000-0000-000000000000	ca071ac8-e40b-435f-8161-639bc40e3a8e	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 19:22:43.138094+00	
00000000-0000-0000-0000-000000000000	9ebe0d0e-242d-4351-a36d-c51c4967f194	{"action":"token_revoked","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 19:22:43.140412+00	
00000000-0000-0000-0000-000000000000	229e28ba-ac8f-4d70-a119-98d4e0ea13f4	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 19:22:43.642452+00	
00000000-0000-0000-0000-000000000000	642ec196-e7cc-4110-8507-f0ff90f0eecb	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 19:22:43.963339+00	
00000000-0000-0000-0000-000000000000	a8f29129-82ee-4b81-a7ef-907703235d9c	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 19:22:44.289928+00	
00000000-0000-0000-0000-000000000000	1f8ed71e-55ef-47b9-a250-cce93c50d0bb	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 22:12:06.363608+00	
00000000-0000-0000-0000-000000000000	04907bd7-8145-4c88-b461-d72dbf7a1e92	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 22:12:06.366256+00	
00000000-0000-0000-0000-000000000000	cb66d09d-3345-48b0-bd35-843eb2738a83	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 22:12:06.660104+00	
00000000-0000-0000-0000-000000000000	f70df2ce-1121-4eea-8bc7-4b4fbd04bef9	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 22:12:06.854187+00	
00000000-0000-0000-0000-000000000000	9bf321c6-e649-4a83-a417-06e6ac724b26	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 22:12:07.057425+00	
00000000-0000-0000-0000-000000000000	d7f86e5b-b2a6-45b6-8bd9-e2b66c8820c6	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 22:12:07.177089+00	
00000000-0000-0000-0000-000000000000	67442116-b0a7-48ee-b998-28a172cfad0a	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 22:12:08.234113+00	
00000000-0000-0000-0000-000000000000	677e9338-d1e2-43b8-87d2-b3d7932d3ca8	{"action":"logout","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-04 22:12:14.309439+00	
00000000-0000-0000-0000-000000000000	f6c6ea98-5808-4660-80d5-4df8ed113045	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-04 22:12:39.526589+00	
00000000-0000-0000-0000-000000000000	d94ea786-73cd-4691-8f24-e83a5a53c348	{"action":"logout","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-04 22:21:29.922365+00	
00000000-0000-0000-0000-000000000000	25b911c7-e7fc-47ba-bdbe-85f1459f6c92	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-04 22:21:40.482738+00	
00000000-0000-0000-0000-000000000000	21dcec3e-0629-4e3e-9c07-acbfa4639096	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 23:19:44.250363+00	
00000000-0000-0000-0000-000000000000	313188d3-2133-4ff3-ac6b-00b39f123075	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-04 23:19:44.253238+00	
00000000-0000-0000-0000-000000000000	07e95e00-279d-4383-8264-23f2b43860ed	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 07:56:14.409095+00	
00000000-0000-0000-0000-000000000000	fae441b3-6f19-465e-b1c4-661588aa7f3a	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 07:56:14.422699+00	
00000000-0000-0000-0000-000000000000	4f9191e6-93b0-41b1-8593-d6fab363aed3	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 07:56:14.767456+00	
00000000-0000-0000-0000-000000000000	d975e833-0c97-4b38-bff6-f2a105e2ebc2	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 07:56:14.878638+00	
00000000-0000-0000-0000-000000000000	689ab28a-f226-4890-86fc-3aff71e2321d	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 07:56:15.706212+00	
00000000-0000-0000-0000-000000000000	77da2067-b0a0-42e3-9bd8-84174415e196	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 07:56:15.928366+00	
00000000-0000-0000-0000-000000000000	a9ab518f-bdbc-4fe8-aa3d-df4acbc5556d	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 07:56:16.853517+00	
00000000-0000-0000-0000-000000000000	ab8c0895-adb7-4348-967a-a381d19e268a	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 11:42:22.163774+00	
00000000-0000-0000-0000-000000000000	1a684577-9c43-4657-995b-f30b86423a3c	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 11:42:22.815311+00	
00000000-0000-0000-0000-000000000000	921dd1bb-77ee-4d0c-b83a-9efec6dc69e6	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 11:42:23.124659+00	
00000000-0000-0000-0000-000000000000	b37ea0d7-bb6d-4d0f-b4be-60083b268577	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 11:42:23.448843+00	
00000000-0000-0000-0000-000000000000	1d0be50f-dc11-4301-b900-f3a5932d7ae2	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 11:42:23.753255+00	
00000000-0000-0000-0000-000000000000	16cc6aee-4b9d-4fa6-be06-02b6886ba6b1	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 11:42:25.216484+00	
00000000-0000-0000-0000-000000000000	3ee75856-0e81-4113-a740-625d6189ee85	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 11:42:25.291887+00	
00000000-0000-0000-0000-000000000000	1a6b84d9-cd9d-4ff4-8d4e-f3f8b23285ea	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 11:42:25.877528+00	
00000000-0000-0000-0000-000000000000	bd179e48-89cc-491c-b642-14da53c78e31	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 11:42:26.19252+00	
00000000-0000-0000-0000-000000000000	3b88440c-6a48-4430-ba6e-909c6ff12ed2	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 11:42:26.332915+00	
00000000-0000-0000-0000-000000000000	35593a76-383f-4d91-8401-af135bf002ce	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 11:42:26.654118+00	
00000000-0000-0000-0000-000000000000	d0f1a61d-d69a-47ce-a1e5-ba58074a700b	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 12:48:45.459669+00	
00000000-0000-0000-0000-000000000000	19d21331-20f3-44c8-b640-8828e0800826	{"action":"token_revoked","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 12:48:45.461602+00	
00000000-0000-0000-0000-000000000000	d7824a38-6f41-4350-ac26-5cc48ae8cee1	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 14:51:24.839196+00	
00000000-0000-0000-0000-000000000000	716d131e-2add-4923-83bd-2e23fff5f041	{"action":"token_revoked","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 14:51:24.841797+00	
00000000-0000-0000-0000-000000000000	205fe503-f330-45da-9155-ab71f72fc2e3	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 17:02:35.691665+00	
00000000-0000-0000-0000-000000000000	4ee4634b-740b-4e1b-a623-15bd2b36f335	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 17:02:35.695716+00	
00000000-0000-0000-0000-000000000000	aee754c4-b6bc-42c5-86ed-52cce5b12fb4	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 17:02:36.094948+00	
00000000-0000-0000-0000-000000000000	dc44eafe-cb56-49f7-b848-d7d2fd5e2bd6	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 17:02:36.219646+00	
00000000-0000-0000-0000-000000000000	0ed051fb-13f6-449b-95e3-ac6fff7310db	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 17:02:36.40784+00	
00000000-0000-0000-0000-000000000000	dd4c0e80-6c52-40d7-9c89-d7db8ae60939	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 17:02:36.662445+00	
00000000-0000-0000-0000-000000000000	7877a3a5-b471-43c9-8707-808b483dc31e	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 17:02:37.511176+00	
00000000-0000-0000-0000-000000000000	b5a0fcf1-c0e4-45d9-b102-6a019f1fb1da	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 18:02:29.314185+00	
00000000-0000-0000-0000-000000000000	83bef216-0398-4f28-8120-0148c9d46c16	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 18:02:29.318802+00	
00000000-0000-0000-0000-000000000000	36753670-69e9-4933-853f-6cd8de95934b	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 21:14:02.82113+00	
00000000-0000-0000-0000-000000000000	1648f8f6-e39d-4176-b7f6-ea462592b635	{"action":"token_revoked","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 21:14:02.825004+00	
00000000-0000-0000-0000-000000000000	0e91afbe-4344-4866-8cba-31da3feb89ae	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 21:14:03.485881+00	
00000000-0000-0000-0000-000000000000	768f528c-c9d5-4460-a366-fffa18703b06	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 21:14:03.789444+00	
00000000-0000-0000-0000-000000000000	e9a44237-d692-4f8b-b11a-2ba837516a6b	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 21:14:04.1082+00	
00000000-0000-0000-0000-000000000000	8a35181a-3276-4060-8d7a-3a8aa668a364	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 21:14:04.41361+00	
00000000-0000-0000-0000-000000000000	401e52aa-13f3-49c9-ba7d-f64d778935c6	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 21:14:05.990744+00	
00000000-0000-0000-0000-000000000000	0501e685-a5b5-4526-b45b-8aaa6bd81564	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 21:14:06.082804+00	
00000000-0000-0000-0000-000000000000	15126105-92e3-4dad-9545-c848c08bc21c	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 21:14:06.698993+00	
00000000-0000-0000-0000-000000000000	e537ff32-2e73-495e-b1e1-d2982d00078a	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 21:14:07.002757+00	
00000000-0000-0000-0000-000000000000	693fb743-ec7f-4404-b5f6-732d63bb2a9b	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 21:14:07.381007+00	
00000000-0000-0000-0000-000000000000	04b73b12-6a58-4deb-84f5-778a601e22b3	{"action":"token_refreshed","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 21:14:07.68566+00	
00000000-0000-0000-0000-000000000000	aa4405fa-cdb9-4ae8-87df-e2d96de5fecd	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-06 21:15:16.821319+00	
00000000-0000-0000-0000-000000000000	0eaddd88-d353-4e55-8a80-1de02d68e598	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-06 21:15:54.40333+00	
00000000-0000-0000-0000-000000000000	fc186d39-95cb-4a7e-92fa-62e83c7fb4c6	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 22:13:58.701502+00	
00000000-0000-0000-0000-000000000000	7d4f0de9-fcbf-4918-99cc-0459885d91b2	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-06 22:13:58.703616+00	
00000000-0000-0000-0000-000000000000	cc527891-e5fd-4bdf-841d-164eb23a2d97	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-07 07:26:23.881529+00	
00000000-0000-0000-0000-000000000000	c2dbfd9d-572b-4d91-965b-b0aaf10798ca	{"action":"token_revoked","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-07 07:26:23.89029+00	
00000000-0000-0000-0000-000000000000	6fb95f3e-2971-402d-85a2-0284cda2440c	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-07 07:26:24.288986+00	
00000000-0000-0000-0000-000000000000	8b93a7bc-e9f1-4292-866d-d029ff6c4044	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-07 07:26:24.484057+00	
00000000-0000-0000-0000-000000000000	61b191b7-10a8-4561-b63a-a9acb47d5141	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-07 07:26:24.730584+00	
00000000-0000-0000-0000-000000000000	8c4aadb4-7f31-4843-a88d-69219e97b31e	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-07 07:26:24.899765+00	
00000000-0000-0000-0000-000000000000	ca59fc0c-373d-4ded-8b9e-fa469ed9e94b	{"action":"token_refreshed","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"token"}	2024-07-07 07:26:25.82787+00	
00000000-0000-0000-0000-000000000000	acc0deb7-14cf-409b-a21b-c228b6e655d5	{"action":"logout","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-07 07:26:30.041106+00	
00000000-0000-0000-0000-000000000000	642ceb77-b029-42c0-9a71-a2feb732997a	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-08 06:32:37.82945+00	
00000000-0000-0000-0000-000000000000	e97ce683-a1d6-4708-ad17-1bac96beb112	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-08 06:32:41.833123+00	
00000000-0000-0000-0000-000000000000	e7c85d3e-594e-4da7-8a13-f76ae025131b	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-08 06:40:27.820687+00	
00000000-0000-0000-0000-000000000000	27837a45-19fa-41f8-a2d9-2a909c92cfc0	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-08 06:40:43.963131+00	
00000000-0000-0000-0000-000000000000	a2fb8a9c-0cda-478a-9407-ea1b0ce4a7e0	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-08 06:40:53.534571+00	
00000000-0000-0000-0000-000000000000	fbcba3ea-a8e2-432f-af6e-e31b08b9b334	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-08 06:42:43.212306+00	
00000000-0000-0000-0000-000000000000	529b601c-944c-4f60-9920-c5f95a9ff9bc	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-08 06:43:04.035878+00	
00000000-0000-0000-0000-000000000000	13d87e8b-d8f9-4d28-a973-fde11c0a3d78	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-08 06:47:27.656782+00	
00000000-0000-0000-0000-000000000000	965b7084-3f81-4251-89af-806901ed0f72	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-08 06:48:29.670885+00	
00000000-0000-0000-0000-000000000000	86e674b3-fdf6-4bd3-a2ce-1140d86b8bec	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-08 06:48:39.844371+00	
00000000-0000-0000-0000-000000000000	f7c3b87e-7843-4e5b-97b8-748c140ca4ae	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-08 06:49:53.320421+00	
00000000-0000-0000-0000-000000000000	a155ad74-8427-4fc2-9a69-cf2be9996682	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-08 06:51:34.908936+00	
00000000-0000-0000-0000-000000000000	6842db3f-ce45-43e8-a0b5-2d6a88af83d2	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-08 06:51:54.523257+00	
00000000-0000-0000-0000-000000000000	1bfc422a-77ac-4051-8c22-6b9731c29d2f	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-08 07:05:51.144852+00	
00000000-0000-0000-0000-000000000000	79543c65-a598-484f-ab7e-d00914fad77d	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-08 07:06:01.357584+00	
00000000-0000-0000-0000-000000000000	12f7442b-e4a1-4a1b-a537-3f3ace248bd6	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-08 07:06:54.222818+00	
00000000-0000-0000-0000-000000000000	22516ad1-1287-4265-9984-187e51479de5	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-08 07:07:10.614384+00	
00000000-0000-0000-0000-000000000000	a6f47446-e69e-4a1e-bbbd-16f0193bdbc4	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-08 07:13:36.739875+00	
00000000-0000-0000-0000-000000000000	fff562fa-0f4e-497d-ad14-9685d71e4e0d	{"action":"login","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-08 07:13:46.705929+00	
00000000-0000-0000-0000-000000000000	4bf43de1-a5e2-47a8-88e2-ef91b40eac97	{"action":"logout","actor_id":"c832b0e5-1d98-440d-8a94-2f44d9b637ed","actor_username":"user@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-08 07:19:07.868763+00	
00000000-0000-0000-0000-000000000000	e33afbe7-d97c-41e6-b189-43f34751b9ca	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-08 07:19:24.336545+00	
00000000-0000-0000-0000-000000000000	c6dcadae-5554-43ee-9ae6-db15b947400a	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-08 07:19:45.417836+00	
00000000-0000-0000-0000-000000000000	1a5cdb6d-1010-4767-939f-27dbd6a23771	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-08 19:15:37.151296+00	
00000000-0000-0000-0000-000000000000	d233b367-5aa3-4cd5-8633-2f0700da82b4	{"action":"logout","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account"}	2024-07-08 19:17:29.530256+00	
00000000-0000-0000-0000-000000000000	d1668a76-72b8-413b-95ce-5b55565023fc	{"action":"login","actor_id":"b631b924-877c-4c34-b246-ca064f208056","actor_username":"diego@test.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}	2024-07-08 19:17:36.74567+00	
\.


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."flow_state" ("id", "user_id", "auth_code", "code_challenge_method", "code_challenge", "provider_type", "provider_access_token", "provider_refresh_token", "created_at", "updated_at", "authentication_method", "auth_code_issued_at") FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") FROM stdin;
00000000-0000-0000-0000-000000000000	c832b0e5-1d98-440d-8a94-2f44d9b637ed	authenticated	authenticated	user@test.com	$2a$10$9mYF73h2gso/QP/4o54FeusH4Dherf5CMTT7KBDSNmYAO9PpTPzKO	2024-06-27 09:45:31.496069+00	\N		\N		\N			\N	2024-07-08 07:13:46.706653+00	{"provider": "email", "providers": ["email"]}	{}	\N	2024-06-27 09:45:31.480966+00	2024-07-08 07:13:46.71308+00	\N	\N			\N		0	\N		\N	f	\N	f
00000000-0000-0000-0000-000000000000	b631b924-877c-4c34-b246-ca064f208056	authenticated	authenticated	diego@test.com	$2a$10$xt0jBJtbfU.cn2MZSG1oyOPSKAh.yt5RuXi7rTZY5rHij0ISVa8kK	2024-06-19 19:05:17.060519+00	\N		\N		\N			\N	2024-07-08 19:17:36.746414+00	{"provider": "email", "providers": ["email"]}	{}	\N	2024-06-19 19:05:17.05126+00	2024-07-08 19:17:36.750928+00	\N	\N			\N		0	\N		\N	f	\N	f
\.


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") FROM stdin;
b631b924-877c-4c34-b246-ca064f208056	b631b924-877c-4c34-b246-ca064f208056	{"sub": "b631b924-877c-4c34-b246-ca064f208056", "email": "diego@test.com", "email_verified": false, "phone_verified": false}	email	2024-06-19 19:05:17.055239+00	2024-06-19 19:05:17.055297+00	2024-06-19 19:05:17.055297+00	48d1300c-90db-4b5e-9a51-71dc9843c45d
c832b0e5-1d98-440d-8a94-2f44d9b637ed	c832b0e5-1d98-440d-8a94-2f44d9b637ed	{"sub": "c832b0e5-1d98-440d-8a94-2f44d9b637ed", "email": "user@test.com", "email_verified": false, "phone_verified": false}	email	2024-06-27 09:45:31.489072+00	2024-06-27 09:45:31.489133+00	2024-06-27 09:45:31.489133+00	3e9ac83f-8a0a-4293-8824-8e461981abed
\.


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."instances" ("id", "uuid", "raw_base_config", "created_at", "updated_at") FROM stdin;
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") FROM stdin;
614eb7b6-514e-43ba-852c-d7f9761073dc	b631b924-877c-4c34-b246-ca064f208056	2024-07-08 19:17:36.746489+00	2024-07-08 19:17:36.746489+00	\N	aal1	\N	\N	Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1	90.75.201.3	\N
\.


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") FROM stdin;
614eb7b6-514e-43ba-852c-d7f9761073dc	2024-07-08 19:17:36.751539+00	2024-07-08 19:17:36.751539+00	password	fcd26c23-9fc5-4b83-a468-c5dabeb092ae
\.


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."mfa_factors" ("id", "user_id", "friendly_name", "factor_type", "status", "created_at", "updated_at", "secret") FROM stdin;
\.


--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."mfa_challenges" ("id", "factor_id", "created_at", "verified_at", "ip_address") FROM stdin;
\.


--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."one_time_tokens" ("id", "user_id", "token_type", "token_hash", "relates_to", "created_at", "updated_at") FROM stdin;
\.


--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") FROM stdin;
00000000-0000-0000-0000-000000000000	112	cmr3apWO6gvdLNwFuV0XoQ	b631b924-877c-4c34-b246-ca064f208056	f	2024-07-08 19:17:36.748542+00	2024-07-08 19:17:36.748542+00	\N	614eb7b6-514e-43ba-852c-d7f9761073dc
\.


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."sso_providers" ("id", "resource_id", "created_at", "updated_at") FROM stdin;
\.


--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."saml_providers" ("id", "sso_provider_id", "entity_id", "metadata_xml", "metadata_url", "attribute_mapping", "created_at", "updated_at", "name_id_format") FROM stdin;
\.


--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."saml_relay_states" ("id", "sso_provider_id", "request_id", "for_email", "redirect_to", "created_at", "updated_at", "flow_state_id") FROM stdin;
\.


--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."sso_domains" ("id", "sso_provider_id", "domain", "created_at", "updated_at") FROM stdin;
\.


--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--

COPY "pgsodium"."key" ("id", "status", "created", "expires", "key_type", "key_id", "key_context", "name", "associated_data", "raw_key", "raw_key_nonce", "parent_key", "comment", "user_data") FROM stdin;
\.


--
-- Data for Name: exercises; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "public"."exercises" ("id", "created_at", "name", "user_id", "max_weight", "last_weight", "last_reps", "last_sets", "last_time") FROM stdin;
ed665820-1bb5-407a-944c-4803bd82a95a	2024-06-27 10:48:48.485908+00	Pull ups	c832b0e5-1d98-440d-8a94-2f44d9b637ed	\N	\N	\N	\N	\N
484114db-ebb9-47a1-b5d3-c6cb5c7467f4	2024-06-28 16:17:33.443632+00	Peso muerto	b631b924-877c-4c34-b246-ca064f208056	\N	\N	\N	\N	\N
a276287a-2f75-47e5-ae17-bc5b1e493b1e	2024-06-28 16:18:44.99719+00	Extensión de triceps en polea	b631b924-877c-4c34-b246-ca064f208056	\N	\N	\N	\N	\N
b131a77f-0f28-44a0-9609-31ce8487728e	2024-06-28 16:26:47.123479+00	Prensa	b631b924-877c-4c34-b246-ca064f208056	\N	\N	\N	\N	\N
9c4c1458-8ea6-47b8-ac7f-e3108c6d8583	2024-07-01 18:35:04.500531+00	Biceps curl	c832b0e5-1d98-440d-8a94-2f44d9b637ed	\N	\N	\N	\N	\N
bcd12678-f80d-420a-8f19-4296a6058ab9	2024-07-02 07:06:25.749129+00	kettlebell swing	c832b0e5-1d98-440d-8a94-2f44d9b637ed	\N	\N	\N	\N	\N
203d1042-e1c0-40d1-bdb0-58626c4e27a0	2024-07-02 16:52:52.038354+00	Peck deck	b631b924-877c-4c34-b246-ca064f208056	\N	\N	\N	\N	\N
52d21a3f-8246-48f0-a119-561bbcd48c90	2024-07-02 17:04:55.590445+00	Press mancuernas inclinado	b631b924-877c-4c34-b246-ca064f208056	\N	\N	\N	\N	\N
a40f4ebb-ae96-4240-a17d-88f540207b55	2024-07-02 17:05:36.729679+00	Aperturas en polea	b631b924-877c-4c34-b246-ca064f208056	\N	\N	\N	\N	\N
bb61d730-d9a6-406d-a387-abfb0de128a9	2024-07-02 17:44:52.787311+00	Ejercicio extremadamente largo de prueba	b631b924-877c-4c34-b246-ca064f208056	\N	\N	\N	\N	\N
188ffb6f-0d8c-4c4c-a8bc-1d46048b660e	2024-07-06 11:49:49.280538+00	fondos	b631b924-877c-4c34-b246-ca064f208056	\N	\N	\N	\N	\N
e1240631-7853-4dce-a6e9-3164c038c9a6	2024-07-06 12:05:06.439158+00	curl biceps aislado barra z	b631b924-877c-4c34-b246-ca064f208056	\N	\N	\N	\N	\N
8078e86a-02b2-43a7-84fc-4211e82b43d8	2024-07-06 12:18:24.397101+00	apertura en polea alta	b631b924-877c-4c34-b246-ca064f208056	\N	\N	\N	\N	\N
dfd4c105-8b81-40e1-bd53-3488bca8bb56	2024-07-06 12:28:53.421007+00	apertura en polea baja	b631b924-877c-4c34-b246-ca064f208056	\N	\N	\N	\N	\N
4099c1a9-0987-4024-be51-fea29c654908	2024-07-06 12:37:28.334755+00	kettlebell swing	b631b924-877c-4c34-b246-ca064f208056	\N	\N	\N	\N	\N
cd8a20d9-91a8-41a8-81d8-658968da0f6b	2024-07-06 12:48:56.395027+00	extensión lumbar	b631b924-877c-4c34-b246-ca064f208056	\N	\N	\N	\N	\N
c4213126-65d0-41a0-bc14-7b0ccbaf7692	2024-07-01 18:13:13.057494+00	hip thrust	c832b0e5-1d98-440d-8a94-2f44d9b637ed	20	15	8	3	\N
ba9eaf62-36e1-4ab4-9a4f-313a0f62cf51	2024-06-28 16:17:22.499343+00	Sentadillas	b631b924-877c-4c34-b246-ca064f208056	\N	\N	\N	\N	\N
71e73a2d-40fd-4a1b-99b7-da6a9c6a241c	2024-07-02 15:39:49.226173+00	Squats	c832b0e5-1d98-440d-8a94-2f44d9b637ed	\N	40	10	\N	\N
ab046161-d7e2-48ce-a57c-ae54b8a3f8c3	2024-06-28 16:17:58.137663+00	Press banca	b631b924-877c-4c34-b246-ca064f208056	20	20	10	3	\N
\.


--
-- Data for Name: workouts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "public"."workouts" ("id", "name", "created_at", "user_id") FROM stdin;
7cb8bf4d-54c5-45ca-a966-80cf2f7e9473	Piernas	2024-06-28 16:17:43.698993+00	b631b924-877c-4c34-b246-ca064f208056
2535b824-ac61-40cf-9066-6f5944ab0221	Pecho	2024-06-28 16:18:56.330951+00	b631b924-877c-4c34-b246-ca064f208056
22399dc6-df76-4385-b357-fde367082dac	Legs	2024-07-02 15:41:28.401831+00	c832b0e5-1d98-440d-8a94-2f44d9b637ed
132c8fa9-a0b4-4518-9efc-1ed6f397ed28	test1	2024-07-04 23:15:24.967718+00	c832b0e5-1d98-440d-8a94-2f44d9b637ed
2e053dcb-69ef-467c-9022-fcde5024d496	upper body	2024-07-06 21:21:46.782464+00	c832b0e5-1d98-440d-8a94-2f44d9b637ed
\.


--
-- Data for Name: exercise_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "public"."exercise_logs" ("id", "exercise_id", "workout_id", "created_at", "weight", "reps", "sets", "time", "material", "order", "notes") FROM stdin;
cfe402c1-d640-4637-8406-2bf870db2abc	c4213126-65d0-41a0-bc14-7b0ccbaf7692	22399dc6-df76-4385-b357-fde367082dac	2024-07-04 15:56:08.582457+00	20	5	\N	\N	\N	\N	\N
01138896-3b99-4c28-9717-c357582e4c5f	ab046161-d7e2-48ce-a57c-ae54b8a3f8c3	2535b824-ac61-40cf-9066-6f5944ab0221	2024-07-06 11:46:04.967921+00	20	10	4	\N	\N	\N	\N
10043368-b891-45ed-8065-07042a937c78	a276287a-2f75-47e5-ae17-bc5b1e493b1e	2535b824-ac61-40cf-9066-6f5944ab0221	2024-07-06 12:02:13.118469+00	20	10	\N	\N	\N	\N	\N
6992ae81-907b-451e-b194-bf39c98037aa	e1240631-7853-4dce-a6e9-3164c038c9a6	2535b824-ac61-40cf-9066-6f5944ab0221	2024-07-06 12:07:11.891964+00	15	10	3	\N	\N	\N	\N
815e3493-7726-4e4c-8b60-88717e68683f	8078e86a-02b2-43a7-84fc-4211e82b43d8	2535b824-ac61-40cf-9066-6f5944ab0221	2024-07-06 12:28:29.302629+00	10	12	3	\N	\N	\N	\N
23542e46-3345-4e76-884d-a7bb8c874ebf	dfd4c105-8b81-40e1-bd53-3488bca8bb56	2535b824-ac61-40cf-9066-6f5944ab0221	2024-07-06 12:34:11.213118+00	5	14	3	\N	-	\N	\N
7b05df0f-40c8-4bf7-90df-393556d59ebe	4099c1a9-0987-4024-be51-fea29c654908	2535b824-ac61-40cf-9066-6f5944ab0221	2024-07-06 12:48:47.975926+00	16	25	3	\N	\N	\N	\N
df95fec1-9bc4-49fa-8bc5-e0676988d7b8	cd8a20d9-91a8-41a8-81d8-658968da0f6b	2535b824-ac61-40cf-9066-6f5944ab0221	2024-07-06 12:52:22.752684+00	\N	20	3	\N	\N	\N	\N
aa857e77-bfe7-4a3a-bc2b-d49b71247659	c4213126-65d0-41a0-bc14-7b0ccbaf7692	22399dc6-df76-4385-b357-fde367082dac	2024-07-06 18:21:46.681236+00	15	8	3	\N	\N	0	\N
d893dc0b-9f7d-403a-8fe6-7e41be3ebaf6	ab046161-d7e2-48ce-a57c-ae54b8a3f8c3	2535b824-ac61-40cf-9066-6f5944ab0221	2024-07-08 19:18:05.418257+00	20	10	3	\N	\N	0	\N
\.


--
-- Data for Name: preferences; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "public"."preferences" ("id", "theme", "lang", "weight_unit", "created_at", "updated_at", "user_id") FROM stdin;
9b0f654e-a9a4-41f8-a9a5-e41eb5202640	dark	\N	\N	2024-06-25 17:29:56.732031+00	2024-06-25 17:29:56.732031+00	b631b924-877c-4c34-b246-ca064f208056
bd7792b9-a6df-4577-bbf4-f4ba952ded65	dark	es	kg	2024-06-27 09:48:28.791293+00	2024-06-27 09:48:28.791293+00	c832b0e5-1d98-440d-8a94-2f44d9b637ed
\.


--
-- Data for Name: workout_exercises; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "public"."workout_exercises" ("id", "workout_id", "exercise_id", "created_at", "order") FROM stdin;
79b80aa3-57e5-4a85-9146-fd9f30fa65b1	7cb8bf4d-54c5-45ca-a966-80cf2f7e9473	ba9eaf62-36e1-4ab4-9a4f-313a0f62cf51	2024-06-28 16:17:43.856695+00	\N
0f67bffc-58dc-48ff-88b2-c2a0d9b7c4f2	7cb8bf4d-54c5-45ca-a966-80cf2f7e9473	484114db-ebb9-47a1-b5d3-c6cb5c7467f4	2024-06-28 16:17:43.856695+00	\N
379608e6-90f1-455d-abd0-dcc57759d459	22399dc6-df76-4385-b357-fde367082dac	71e73a2d-40fd-4a1b-99b7-da6a9c6a241c	2024-07-03 13:03:28.828205+00	\N
9f744145-0333-4fb7-b683-10fe10081ad8	22399dc6-df76-4385-b357-fde367082dac	c4213126-65d0-41a0-bc14-7b0ccbaf7692	2024-07-03 13:03:28.828205+00	\N
60651e2d-6378-466b-b49a-d301b8dde054	2e053dcb-69ef-467c-9022-fcde5024d496	9c4c1458-8ea6-47b8-ac7f-e3108c6d8583	2024-07-06 21:21:46.975012+00	\N
88b050e5-6e31-4245-ba44-f409b6cce4e4	2e053dcb-69ef-467c-9022-fcde5024d496	bcd12678-f80d-420a-8f19-4296a6058ab9	2024-07-06 21:21:46.975012+00	\N
2f8bcc1d-b0a5-49d1-8a08-4ff04a7b54bc	2e053dcb-69ef-467c-9022-fcde5024d496	ed665820-1bb5-407a-944c-4803bd82a95a	2024-07-06 21:21:46.975012+00	\N
d4bb0329-def1-4d96-950c-f904af0293a5	2e053dcb-69ef-467c-9022-fcde5024d496	c4213126-65d0-41a0-bc14-7b0ccbaf7692	2024-07-06 21:21:46.975012+00	\N
c4fa885c-9b9c-419c-b695-993ee5f6341d	2535b824-ac61-40cf-9066-6f5944ab0221	ab046161-d7e2-48ce-a57c-ae54b8a3f8c3	2024-07-02 17:05:57.330267+00	\N
7d4d3639-1e39-40d9-b96b-de0ee5a59ac7	2535b824-ac61-40cf-9066-6f5944ab0221	a276287a-2f75-47e5-ae17-bc5b1e493b1e	2024-07-02 17:05:57.330267+00	\N
5c2a4f39-667b-4ea9-b7e9-29381f07fe09	2535b824-ac61-40cf-9066-6f5944ab0221	203d1042-e1c0-40d1-bdb0-58626c4e27a0	2024-07-02 17:05:57.330267+00	\N
e376b7d1-92a6-4efc-a72f-0fc3dfc463a5	2535b824-ac61-40cf-9066-6f5944ab0221	52d21a3f-8246-48f0-a119-561bbcd48c90	2024-07-02 17:05:57.330267+00	\N
04729b65-d1d4-4e3c-8d69-0ec91b42144b	2535b824-ac61-40cf-9066-6f5944ab0221	a40f4ebb-ae96-4240-a17d-88f540207b55	2024-07-02 17:05:57.330267+00	\N
\.


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") FROM stdin;
\.


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id") FROM stdin;
\.


--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."s3_multipart_uploads" ("id", "in_progress_size", "upload_signature", "bucket_id", "key", "version", "owner_id", "created_at") FROM stdin;
\.


--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."s3_multipart_uploads_parts" ("id", "upload_id", "size", "part_number", "bucket_id", "key", "etag", "owner_id", "version", "created_at") FROM stdin;
\.


--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--

COPY "vault"."secrets" ("id", "name", "description", "secret", "key_id", "nonce", "created_at", "updated_at") FROM stdin;
\.


--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 112, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
