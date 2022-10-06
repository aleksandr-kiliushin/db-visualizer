--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4 (Ubuntu 13.4-4.pgdg20.04+1)
-- Dumped by pg_dump version 13.4 (Ubuntu 13.4-4.pgdg20.04+1)

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
-- Name: btree_gin; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS btree_gin WITH SCHEMA public;


--
-- Name: EXTENSION btree_gin; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION btree_gin IS 'support for indexing common datatypes in GIN';


--
-- Name: btree_gist; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS btree_gist WITH SCHEMA public;


--
-- Name: EXTENSION btree_gist; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION btree_gist IS 'support for indexing common datatypes in GiST';


--
-- Name: citext; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


--
-- Name: cube; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS cube WITH SCHEMA public;


--
-- Name: EXTENSION cube; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION cube IS 'data type for multidimensional cubes';


--
-- Name: dblink; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dblink WITH SCHEMA public;


--
-- Name: EXTENSION dblink; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dblink IS 'connect to other PostgreSQL databases from within a database';


--
-- Name: dict_int; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dict_int WITH SCHEMA public;


--
-- Name: EXTENSION dict_int; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dict_int IS 'text search dictionary template for integers';


--
-- Name: dict_xsyn; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dict_xsyn WITH SCHEMA public;


--
-- Name: EXTENSION dict_xsyn; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dict_xsyn IS 'text search dictionary template for extended synonym processing';


--
-- Name: earthdistance; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS earthdistance WITH SCHEMA public;


--
-- Name: EXTENSION earthdistance; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION earthdistance IS 'calculate great-circle distances on the surface of the Earth';


--
-- Name: fuzzystrmatch; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS fuzzystrmatch WITH SCHEMA public;


--
-- Name: EXTENSION fuzzystrmatch; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION fuzzystrmatch IS 'determine similarities and distance between strings';


--
-- Name: hstore; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS hstore WITH SCHEMA public;


--
-- Name: EXTENSION hstore; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION hstore IS 'data type for storing sets of (key, value) pairs';


--
-- Name: intarray; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS intarray WITH SCHEMA public;


--
-- Name: EXTENSION intarray; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION intarray IS 'functions, operators, and index support for 1-D arrays of integers';


--
-- Name: ltree; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS ltree WITH SCHEMA public;


--
-- Name: EXTENSION ltree; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION ltree IS 'data type for hierarchical tree-like structures';


--
-- Name: pg_stat_statements; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA public;


--
-- Name: EXTENSION pg_stat_statements; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_stat_statements IS 'track planning and execution statistics of all SQL statements executed';


--
-- Name: pg_trgm; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;


--
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';


--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: pgrowlocks; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgrowlocks WITH SCHEMA public;


--
-- Name: EXTENSION pgrowlocks; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgrowlocks IS 'show row-level locking information';


--
-- Name: pgstattuple; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgstattuple WITH SCHEMA public;


--
-- Name: EXTENSION pgstattuple; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgstattuple IS 'show tuple-level statistics';


--
-- Name: tablefunc; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS tablefunc WITH SCHEMA public;


--
-- Name: EXTENSION tablefunc; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION tablefunc IS 'functions that manipulate whole tables, including crosstab';


--
-- Name: unaccent; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS unaccent WITH SCHEMA public;


--
-- Name: EXTENSION unaccent; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION unaccent IS 'text search dictionary that removes accents';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: xml2; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS xml2 WITH SCHEMA public;


--
-- Name: EXTENSION xml2; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION xml2 IS 'XPath querying and XSLT';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: board; Type: TABLE; Schema: public; Owner: rqllnykg
--

CREATE TABLE public.board (
    id integer NOT NULL,
    name character varying NOT NULL,
    "subjectId" integer
);


ALTER TABLE public.board OWNER TO rqllnykg;

--
-- Name: board_id_seq; Type: SEQUENCE; Schema: public; Owner: rqllnykg
--

CREATE SEQUENCE public.board_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.board_id_seq OWNER TO rqllnykg;

--
-- Name: board_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rqllnykg
--

ALTER SEQUENCE public.board_id_seq OWNED BY public.board.id;


--
-- Name: board_subject; Type: TABLE; Schema: public; Owner: rqllnykg
--

CREATE TABLE public.board_subject (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.board_subject OWNER TO rqllnykg;

--
-- Name: board_subject_id_seq; Type: SEQUENCE; Schema: public; Owner: rqllnykg
--

CREATE SEQUENCE public.board_subject_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.board_subject_id_seq OWNER TO rqllnykg;

--
-- Name: board_subject_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rqllnykg
--

ALTER SEQUENCE public.board_subject_id_seq OWNED BY public.board_subject.id;


--
-- Name: budgeting_category; Type: TABLE; Schema: public; Owner: rqllnykg
--

CREATE TABLE public.budgeting_category (
    id integer NOT NULL,
    name character varying NOT NULL,
    "typeId" integer,
    "boardId" integer
);


ALTER TABLE public.budgeting_category OWNER TO rqllnykg;

--
-- Name: budgeting_category_id_seq; Type: SEQUENCE; Schema: public; Owner: rqllnykg
--

CREATE SEQUENCE public.budgeting_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.budgeting_category_id_seq OWNER TO rqllnykg;

--
-- Name: budgeting_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rqllnykg
--

ALTER SEQUENCE public.budgeting_category_id_seq OWNED BY public.budgeting_category.id;


--
-- Name: budgeting_category_type; Type: TABLE; Schema: public; Owner: rqllnykg
--

CREATE TABLE public.budgeting_category_type (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.budgeting_category_type OWNER TO rqllnykg;

--
-- Name: budgeting_category_type_id_seq; Type: SEQUENCE; Schema: public; Owner: rqllnykg
--

CREATE SEQUENCE public.budgeting_category_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.budgeting_category_type_id_seq OWNER TO rqllnykg;

--
-- Name: budgeting_category_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rqllnykg
--

ALTER SEQUENCE public.budgeting_category_type_id_seq OWNED BY public.budgeting_category_type.id;


--
-- Name: budgeting_record; Type: TABLE; Schema: public; Owner: rqllnykg
--

CREATE TABLE public.budgeting_record (
    amount integer NOT NULL,
    date character varying NOT NULL,
    id integer NOT NULL,
    "isTrashed" boolean DEFAULT false NOT NULL,
    "categoryId" integer
);


ALTER TABLE public.budgeting_record OWNER TO rqllnykg;

--
-- Name: budgeting_record_id_seq; Type: SEQUENCE; Schema: public; Owner: rqllnykg
--

CREATE SEQUENCE public.budgeting_record_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.budgeting_record_id_seq OWNER TO rqllnykg;

--
-- Name: budgeting_record_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rqllnykg
--

ALTER SEQUENCE public.budgeting_record_id_seq OWNED BY public.budgeting_record.id;


--
-- Name: migrations; Type: TABLE; Schema: public; Owner: rqllnykg
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.migrations OWNER TO rqllnykg;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: rqllnykg
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.migrations_id_seq OWNER TO rqllnykg;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rqllnykg
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: rqllnykg
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL
);


ALTER TABLE public."user" OWNER TO rqllnykg;

--
-- Name: user_administrated_boards_board; Type: TABLE; Schema: public; Owner: rqllnykg
--

CREATE TABLE public.user_administrated_boards_board (
    "userId" integer NOT NULL,
    "boardId" integer NOT NULL
);


ALTER TABLE public.user_administrated_boards_board OWNER TO rqllnykg;

--
-- Name: user_boards_board; Type: TABLE; Schema: public; Owner: rqllnykg
--

CREATE TABLE public.user_boards_board (
    "userId" integer NOT NULL,
    "boardId" integer NOT NULL
);


ALTER TABLE public.user_boards_board OWNER TO rqllnykg;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: rqllnykg
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO rqllnykg;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rqllnykg
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: board id; Type: DEFAULT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.board ALTER COLUMN id SET DEFAULT nextval('public.board_id_seq'::regclass);


--
-- Name: board_subject id; Type: DEFAULT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.board_subject ALTER COLUMN id SET DEFAULT nextval('public.board_subject_id_seq'::regclass);


--
-- Name: budgeting_category id; Type: DEFAULT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.budgeting_category ALTER COLUMN id SET DEFAULT nextval('public.budgeting_category_id_seq'::regclass);


--
-- Name: budgeting_category_type id; Type: DEFAULT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.budgeting_category_type ALTER COLUMN id SET DEFAULT nextval('public.budgeting_category_type_id_seq'::regclass);


--
-- Name: budgeting_record id; Type: DEFAULT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.budgeting_record ALTER COLUMN id SET DEFAULT nextval('public.budgeting_record_id_seq'::regclass);


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: board; Type: TABLE DATA; Schema: public; Owner: rqllnykg
--

COPY public.board (id, name, "subjectId") FROM stdin;
1	kiliushins-budgeting	1
\.


--
-- Data for Name: board_subject; Type: TABLE DATA; Schema: public; Owner: rqllnykg
--

COPY public.board_subject (id, name) FROM stdin;
1	budgeting
\.


--
-- Data for Name: budgeting_category; Type: TABLE DATA; Schema: public; Owner: rqllnykg
--

COPY public.budgeting_category (id, name, "typeId", "boardId") FROM stdin;
1	clothes	1	1
2	education	1	1
3	gifts	1	1
4	health	1	1
5	house	1	1
6	junkfood	1	1
7	meal	1	1
8	medicine	1	1
9	other	1	1
10	rest	1	1
11	telecom	1	1
12	transport	1	1
13	salary	2	1
14	gifts	2	1
17	investments	2	1
16	investments	1	1
15	flat rent	1	1
\.


--
-- Data for Name: budgeting_category_type; Type: TABLE DATA; Schema: public; Owner: rqllnykg
--

COPY public.budgeting_category_type (id, name) FROM stdin;
1	expense
2	income
\.


--
-- Data for Name: budgeting_record; Type: TABLE DATA; Schema: public; Owner: rqllnykg
--

COPY public.budgeting_record (amount, date, id, "isTrashed", "categoryId") FROM stdin;
700	2021-05-02	559	f	8
318	2021-05-02	560	f	7
500	2021-05-02	561	f	3
630	2021-05-03	562	f	7
2000	2021-05-04	563	f	1
80	2021-05-04	564	f	12
1118	2021-05-06	565	f	7
120	2021-05-06	566	f	7
67	2021-05-06	567	f	7
140	2021-05-06	568	f	12
1860	2021-05-08	569	f	7
500	2021-05-08	570	f	11
290	2021-05-09	571	f	7
450	2021-05-09	572	f	5
350	2021-05-12	573	f	7
200	2021-05-12	574	f	6
726	2021-05-12	575	f	10
300	2021-05-13	576	f	7
4900	2021-05-15	577	f	1
600	2021-05-16	578	f	8
140	2021-05-17	579	f	5
1050	2021-05-18	580	f	11
500	2021-05-19	581	f	7
175	2021-05-19	582	f	6
592	2021-05-20	583	f	7
145	2021-05-21	584	f	7
340	2021-05-21	585	f	7
380	2021-05-21	586	f	6
60	2021-05-22	587	f	5
150	2021-05-25	588	f	6
165	2021-05-26	589	f	6
80	2021-05-26	590	f	5
400	2021-06-01	591	f	10
120	2021-06-02	592	f	6
275	2021-06-03	593	f	8
258	2021-06-04	594	f	12
35	2021-06-05	595	f	6
2300	2021-06-07	596	f	7
140	2021-06-09	597	f	6
540	2021-06-09	598	f	9
200	2021-06-10	599	f	7
60	2021-06-13	600	f	7
300	2021-06-13	601	f	7
5	2021-06-13	602	f	7
200	2021-06-13	603	f	3
1300	2021-06-15	604	f	9
3670	2021-06-16	605	f	7
100	2021-06-17	606	f	7
1640	2021-06-18	607	f	8
700	2021-06-19	608	f	11
260	2021-06-20	609	f	6
362	2021-06-20	610	f	6
1400	2021-06-21	611	f	7
200	2021-06-21	612	f	3
2950	2021-06-21	613	f	2
1350	2021-06-22	614	f	7
300	2021-06-23	615	f	6
230	2021-06-23	616	f	5
60	2021-06-27	617	f	7
335	2021-06-27	618	f	6
300	2021-06-27	619	f	4
250	2021-06-28	620	f	7
386	2021-06-29	621	f	7
400	2021-06-29	622	f	5
300	2021-06-29	623	f	10
60	2021-06-30	624	f	10
60	2021-07-01	625	f	6
290	2021-07-01	626	f	11
72	2021-07-01	627	f	12
140	2021-07-03	628	f	7
490	2021-07-04	629	f	7
300	2021-07-08	630	f	10
160	2021-07-09	631	f	7
220	2021-07-09	632	f	6
60	2021-07-11	633	f	7
1350	2021-07-11	634	f	5
570	2021-07-12	635	f	8
110	2021-07-13	636	f	7
650	2021-07-13	637	f	5
200	2021-07-13	638	f	9
70	2021-07-14	639	f	6
410	2021-07-14	640	f	6
2000	2021-07-14	641	f	3
340	2021-07-15	642	f	6
2300	2021-07-15	643	f	12
1500	2021-07-15	644	f	3
350	2021-07-16	645	f	6
230	2021-07-17	646	f	6
2880	2021-07-18	647	f	7
70	2021-07-18	648	f	6
700	2021-07-19	649	f	11
225	2021-07-19	650	f	12
72	2021-07-19	651	f	12
1750	2021-07-20	652	f	7
300	2021-07-21	653	f	7
100	2021-07-22	654	f	6
120	2021-07-22	655	f	6
72	2021-07-22	656	f	12
20	2021-07-23	657	f	8
2110	2021-07-23	658	f	7
500	2021-07-23	659	f	7
460	2021-07-23	660	f	6
160	2021-07-24	661	f	6
520	2021-07-25	662	f	8
100	2021-07-25	663	f	6
290	2021-07-25	664	f	5
72	2021-08-06	665	f	12
150	2021-08-04	666	f	12
1030	2021-08-07	667	f	11
150	2021-08-07	668	f	6
1950	2021-08-07	669	f	7
1200	2021-08-12	670	f	7
4990	2021-08-14	671	f	3
1000	2021-08-14	672	f	7
130	2021-08-13	673	f	7
80	2021-08-13	674	f	6
99	2021-07-25	675	f	5
1800	2021-08-01	676	f	8
180	2021-08-04	677	f	6
180	2021-08-04	678	f	7
310	2021-08-05	679	f	5
72	2021-08-16	680	f	12
200	2021-08-16	681	f	10
150	2021-08-16	682	f	6
150	2021-08-16	683	f	7
40	2021-08-16	684	f	5
900	2021-08-18	685	f	7
72	2021-08-18	686	f	12
500	2021-08-18	687	f	3
209	2021-08-19	688	f	5
100	2021-08-20	689	f	3
30	2021-08-20	690	f	7
130	2021-08-20	691	f	6
72	2021-08-20	692	f	12
1210	2021-08-21	693	f	7
160	2021-08-21	694	f	6
25000	2021-05-15	695	f	15
25000	2021-06-15	696	f	15
25000	2021-07-15	697	f	15
25000	2021-08-15	698	f	15
1800	2021-06-15	699	f	15
190	2021-09-17	700	f	6
1800	2021-07-15	701	f	15
825	2021-08-15	702	f	15
5000	2021-05-05	703	f	14
5000	2021-06-05	704	f	14
5000	2021-07-05	705	f	14
5000	2021-08-05	706	f	14
15000	2021-08-23	707	f	14
17000	2021-08-17	708	f	13
500	2021-08-25	709	f	3
250	2021-08-25	710	f	7
500	2021-08-25	711	f	6
1150	2021-08-26	712	f	3
250	2021-08-26	713	f	5
72	2021-08-27	714	f	12
120	2021-08-28	715	f	7
5000	2021-08-28	716	f	14
335	2021-08-27	717	f	10
335	2021-08-27	718	f	2
380	2021-08-29	719	f	2
3400	2021-05-15	720	f	15
32217	2021-05-21	721	f	13
37818	2021-06-07	722	f	13
32217	2021-06-23	723	f	13
37818	2021-07-07	724	f	13
44022	2021-07-23	725	f	13
51678	2021-08-06	726	f	13
44000	2021-08-23	727	f	13
37700	2021-05-10	728	f	13
37700	2021-06-10	729	f	13
37700	2021-07-10	730	f	13
37700	2021-08-10	731	f	13
31200	2021-05-25	732	f	13
31200	2021-06-25	733	f	13
31200	2021-07-25	734	f	13
31200	2021-08-25	735	f	13
7000	2021-08-29	736	f	14
45	2021-09-17	737	f	7
150	2021-08-29	738	f	7
50	2021-08-29	739	f	6
300	2021-08-30	740	f	12
200	2021-08-30	741	f	6
200	2021-08-30	742	f	10
36	2021-08-30	743	f	12
3000	2021-08-29	744	f	14
1250	2021-08-30	745	f	7
72	2021-08-31	746	f	12
500	2021-08-31	747	f	3
180	2021-08-31	748	f	4
180	2021-08-31	749	f	5
180	2021-08-31	750	f	9
85	2021-09-22	751	f	6
7015	2021-08-31	752	f	15
170	2021-09-02	753	f	8
313	2021-09-02	754	f	7
150	2021-09-04	755	f	8
150	2021-09-04	756	f	4
150	2021-09-04	757	f	10
20	2021-09-04	758	f	6
430	2021-09-04	759	f	6
1770	2021-09-04	760	f	7
1100	2021-09-04	761	f	15
15	2021-09-05	762	f	7
50	2021-09-05	763	f	4
500	2021-09-07	764	f	3
500	2021-09-07	765	f	3
500	2021-09-07	766	f	3
51700	2021-09-07	767	f	13
50	2021-09-07	768	f	6
110	2021-09-07	769	f	4
110	2021-09-07	770	f	7
366	2021-09-09	771	f	8
110	2021-09-09	772	f	6
45	2021-09-09	773	f	7
440	2021-09-10	774	f	11
72	2021-09-11	775	f	12
144	2021-09-12	776	f	12
120	2021-09-12	777	f	6
65	2021-09-12	778	f	7
36	2021-09-10	779	f	12
215	2021-09-05	780	f	6
2200	2021-09-13	781	f	7
8000	2021-08-26	782	f	14
2000	2021-06-05	783	f	1
18600	2021-09-10	784	f	13
450	2021-09-13	785	f	2
72	2021-09-14	786	f	12
1422	2021-09-14	787	f	8
35	2021-09-18	788	f	6
157	2021-09-15	789	f	6
200	2021-09-18	790	f	3
18113	2021-09-15	791	f	15
44000	2021-09-23	792	f	13
475	2021-09-14	793	f	9
72	2021-09-16	794	f	12
10	2021-09-18	795	f	5
1600	2021-09-15	796	f	10
500	2021-09-16	797	f	10
1000	2021-09-16	798	f	3
32	2021-09-16	799	f	7
61	2021-09-18	800	f	6
31200	2021-09-24	801	f	13
74	2021-09-18	802	f	7
180	2021-09-19	803	f	12
140	2021-09-19	804	f	3
1300	2021-09-19	805	f	7
50	2021-09-19	806	f	6
600	2021-09-19	807	f	3
370	2021-09-20	808	f	11
120	2021-09-20	809	f	7
15	2021-09-20	810	f	6
72	2021-09-16	811	f	12
480	2021-09-23	812	f	7
75	2021-09-23	813	f	6
70	2021-09-23	814	f	12
30	2021-09-23	815	f	6
40	2021-09-23	816	f	7
1463	2021-09-26	817	f	13
46	2021-09-26	818	f	4
72	2021-09-27	819	f	12
20	2021-09-26	820	f	12
1000	2021-09-25	821	f	10
2500	2021-09-27	822	f	12
2500	2021-09-28	823	f	13
72	2021-09-28	824	f	12
1000	2021-09-28	825	f	4
800	2021-09-28	826	f	10
1000	2021-09-28	827	f	10
1700	2021-09-28	828	f	2
1000	2021-09-28	829	f	3
1888	2021-09-28	830	f	7
500	2021-09-29	831	f	11
550	2021-09-29	832	f	5
72	2021-09-29	833	f	12
74	2021-09-29	834	f	7
5000	2021-09-29	835	f	14
72	2021-09-30	836	f	12
100	2021-09-30	837	f	7
50	2021-09-30	838	f	6
72	2021-10-01	839	f	12
200	2021-10-02	840	f	6
1250	2021-10-02	841	f	7
108	2021-10-04	842	f	12
30	2021-10-05	843	f	6
369	2021-10-05	844	f	7
1850	2021-10-08	845	f	7
483	2021-10-09	846	f	6
270	2021-10-12	847	f	3
160	2021-10-09	848	f	5
85000	2021-10-08	849	f	13
51700	2021-10-08	850	f	13
500	2021-10-12	851	f	14
500	2021-10-12	852	f	7
240	2021-10-12	853	f	6
680	2021-10-14	854	f	7
27401	2021-10-15	855	f	15
40	2021-10-16	856	f	6
1100	2021-10-17	857	f	10
100	2021-10-17	858	f	6
280	2021-10-17	859	f	7
68	2021-10-17	860	f	7
595	2021-10-17	861	f	8
448	2021-10-19	862	f	7
210	2021-10-20	863	f	6
60	2021-10-22	864	f	6
310	2021-10-22	865	f	3
1150	2021-10-23	866	f	3
2470	2021-10-23	867	f	7
350	2021-10-23	868	f	6
290	2021-10-23	869	f	5
562	2021-10-23	870	f	5
160	2021-10-24	871	f	6
1200	2021-10-24	872	f	4
100	2021-10-24	873	f	5
31	2021-10-26	874	f	6
31	2021-10-26	875	f	7
72	2021-10-26	876	f	12
124	2021-10-27	877	f	7
450	2021-10-28	878	f	4
190	2021-10-28	879	f	7
500	2021-10-29	880	f	3
300	2021-10-30	881	f	6
2250	2021-10-30	882	f	7
5000	2021-10-31	883	f	14
106	2021-11-01	884	f	6
70	2021-11-02	885	f	6
1850	2021-11-02	886	f	8
140	2021-11-03	887	f	6
100	2021-11-03	888	f	7
72	2021-11-03	889	f	12
85000	2021-11-08	890	f	3
72	2021-11-08	891	f	12
760	2021-11-08	892	f	11
748	2021-11-08	893	f	8
199	2021-11-08	894	f	4
200	2021-11-11	895	f	7
65	2021-11-11	896	f	6
40	2021-11-12	897	f	7
25	2021-11-12	898	f	6
50	2021-11-12	899	f	10
60	2021-11-13	900	f	7
103	2021-11-13	901	f	6
100	2021-11-13	902	f	7
150	2021-11-14	903	f	6
2050	2021-11-14	904	f	7
860	2021-11-14	905	f	4
45	2021-11-19	906	f	7
600	2021-11-20	907	f	10
28000	2021-11-15	908	f	15
200	2021-11-20	909	f	8
180	2021-11-20	910	f	3
2800	2021-11-20	911	f	7
360	2021-11-20	912	f	4
3000	2021-11-20	913	f	2
500	2021-11-22	914	f	6
1500	2021-11-22	915	f	3
200	2021-11-23	916	f	5
55	2021-11-23	917	f	6
200	2021-11-24	918	f	6
72	2021-11-25	919	f	12
160	2021-11-25	920	f	7
1190	2021-11-26	921	f	7
300	2021-11-26	922	f	6
216	2021-11-27	923	f	12
31500	2021-11-25	924	f	13
33000	2021-11-27	925	f	10
33000	2021-11-27	926	f	2
210	2021-11-28	927	f	4
144	2021-11-28	928	f	12
168	2021-11-30	929	f	7
691	2021-11-30	930	f	8
140	2021-11-30	931	f	6
556	2021-12-02	932	f	8
100	2021-12-02	933	f	12
290	2021-12-03	934	f	7
170	2021-12-03	935	f	10
150	2021-12-03	936	f	6
200	2021-12-03	937	f	4
2100	2021-12-04	938	f	7
100	2021-12-04	939	f	6
220	2021-12-07	940	f	6
50	2021-12-07	941	f	7
72	2021-12-09	942	f	12
83	2021-12-09	943	f	7
5000	2021-12-10	944	f	14
610	2021-12-11	945	f	4
3000	2021-12-11	946	f	7
200	2021-12-11	947	f	6
360	2021-12-12	948	f	4
222	2021-12-12	949	f	7
149	2021-12-12	950	f	6
700	2021-12-12	951	f	3
144	2021-12-12	952	f	12
183	2021-12-13	953	f	6
2600	2021-12-14	954	f	1
200	2021-12-15	955	f	7
100	2021-12-15	956	f	12
300	2021-12-15	957	f	8
300	2021-12-15	958	f	1
146000	2021-11-23	959	f	13
68500	2021-12-15	960	f	13
190	2021-12-17	961	f	6
72	2021-12-17	962	f	12
360	2021-12-18	963	f	4
1180	2021-12-20	964	f	6
300	2021-12-22	965	f	3
190	2021-12-22	966	f	7
44000	2021-12-23	967	f	13
108	2021-12-24	968	f	12
225	2021-12-24	969	f	7
75	2021-12-24	970	f	6
1300	2021-12-24	971	f	3
388	2021-12-25	972	f	7
72	2021-12-25	973	f	12
800	2021-12-28	974	f	15
260	2021-12-29	975	f	5
400	2021-12-30	976	f	6
500	2021-12-30	977	f	3
2300	2021-12-24	978	f	7
300	2021-12-24	979	f	6
300	2021-12-31	980	f	7
350	2021-12-31	981	f	6
4500	2021-12-27	982	f	13
180	2021-12-31	983	f	8
40	2021-12-31	984	f	4
600	2021-12-31	985	f	3
28000	2021-12-15	986	f	15
44000	2021-10-23	987	f	13
51700	2021-11-07	988	f	13
51700	2021-12-07	989	f	13
31600	2021-12-25	990	f	13
33500	2021-12-10	991	f	13
33500	2021-11-10	992	f	13
31600	2021-10-25	993	f	13
220	2022-01-23	994	f	10
144	2022-01-24	995	f	12
1000	2022-01-24	996	f	14
450	2022-01-24	997	f	7
72	2022-01-25	998	f	12
3894	2022-01-01	999	f	17
87	2022-01-02	1000	f	6
144	2022-01-02	1001	f	12
18	2022-01-02	1002	f	7
70	2022-01-02	1003	f	6
100	2022-01-02	1004	f	6
2100	2022-01-02	1005	f	3
278	2022-01-02	1006	f	3
70	2022-01-02	1007	f	6
10000	2021-12-31	1008	f	17
300	2022-01-03	1009	f	5
90	2022-01-03	1010	f	6
640	2022-01-03	1011	f	7
15	2022-01-03	1012	f	11
860	2022-01-03	1013	f	1
700	2022-01-03	1014	f	7
461	2022-01-04	1015	f	17
72	2022-01-04	1016	f	12
36	2022-01-04	1017	f	12
90	2022-01-06	1018	f	6
155	2022-01-07	1019	f	6
900	2022-01-05	1020	t	17
32	2022-01-07	1021	f	6
500	2022-01-07	1022	f	3
155	2022-01-08	1023	f	6
155	2022-01-08	1024	f	7
180	2022-01-06	1025	f	4
33	2022-01-09	1026	f	6
33	2022-01-09	1027	f	7
30000	2022-01-09	1028	f	14
500	2022-01-10	1029	f	11
3000	2022-01-10	1030	f	14
36660	2022-01-11	1031	f	13
100	2022-01-11	1032	f	6
30	2022-01-11	1033	f	7
300	2022-01-11	1034	f	11
1000	2022-01-13	1035	f	3
270	2022-01-13	1036	f	7
270	2022-01-13	1037	f	6
580	2022-01-13	1038	f	12
400	2022-01-12	1039	f	7
100	2022-01-12	1040	f	4
99	2022-01-13	1041	f	8
94	2022-01-13	1042	f	7
540	2022-01-13	1043	f	3
540	2022-01-13	1044	f	5
45	2022-01-13	1045	f	5
250	2022-01-13	1046	f	7
39	2022-01-14	1047	f	6
1000	2022-01-15	1048	f	12
104	2022-01-15	1049	f	12
24250	2022-01-15	1050	f	15
190	2022-01-15	1051	f	3
257	2022-01-15	1052	f	7
28	2022-01-15	1053	f	12
600	2022-01-15	1054	f	10
500	2022-01-15	1055	f	1
112	2022-01-16	1056	f	12
30	2022-01-16	1057	f	7
30	2022-01-16	1058	f	6
72	2022-01-16	1059	f	12
3420	2022-01-16	1060	f	15
72	2022-01-19	1061	f	12
1550	2022-01-19	1062	f	7
150	2022-01-19	1063	f	6
5000	2022-01-21	1064	f	14
144	2022-01-21	1065	f	12
44000	2022-01-21	1066	f	13
86	2022-01-22	1067	f	7
9000	2022-01-22	1068	f	10
861	2022-01-25	1069	f	8
31200	2022-01-25	1070	f	13
500	2022-01-26	1071	f	3
72	2022-01-26	1072	f	12
150	2022-01-26	1073	f	6
2364	2022-01-29	1074	f	7
900	2022-01-30	1075	f	7
440	2022-01-30	1076	f	8
130000	2022-01-31	1077	f	13
30000	2022-01-31	1078	f	16
600	2022-02-01	1079	f	4
200	2022-02-01	1080	f	7
400	2022-02-02	1081	f	4
400	2022-02-05	1082	f	4
3040	2022-02-04	1083	f	7
990	2022-02-04	1084	f	6
70	2022-02-07	1085	f	6
600	2022-02-04	1086	f	7
1100	2022-02-08	1087	f	8
112	2022-02-08	1088	f	12
112	2022-01-31	1089	f	12
1200	2022-02-10	1090	f	3
992	2022-02-07	1091	f	7
215	2022-01-31	1092	f	7
51700	2022-02-10	1093	f	13
1520	2022-02-10	1094	f	12
52162	2022-02-10	1095	t	9
300	2022-02-12	1096	f	11
3300	2022-02-12	1097	f	7
560	2022-02-12	1098	f	7
10000	2022-02-10	1099	f	13
1630	2022-02-12	1100	f	9
348	2022-02-12	1101	f	9
30000	2022-02-15	1102	f	15
100	2022-02-16	1103	f	6
2500	2022-02-18	1104	f	7
1050	2022-02-19	1105	f	6
104	2022-02-25	1106	f	12
104	2022-02-24	1107	f	12
300	2022-02-24	1108	f	7
1500	2022-02-20	1109	f	10
100	2022-02-20	1110	f	12
500	2022-02-19	1111	f	10
740	2022-02-21	1112	f	3
290	2022-02-20	1113	f	4
400	2022-02-19	1114	f	7
2017	2022-02-25	1115	f	7
104	2022-02-25	1116	f	12
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: rqllnykg
--

COPY public.migrations (id, "timestamp", name) FROM stdin;
1	1659879262593	Init1659879262593
2	1664731276878	AddBoards1664731276878
3	1664909097677	RenameFinancesToBudgeting1664909097677
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: rqllnykg
--

COPY public."user" (id, username, password) FROM stdin;
1	sasha	8ad503f4e5d1
2	masha	8cdf11a3a3
\.


--
-- Data for Name: user_administrated_boards_board; Type: TABLE DATA; Schema: public; Owner: rqllnykg
--

COPY public.user_administrated_boards_board ("userId", "boardId") FROM stdin;
\.


--
-- Data for Name: user_boards_board; Type: TABLE DATA; Schema: public; Owner: rqllnykg
--

COPY public.user_boards_board ("userId", "boardId") FROM stdin;
1	1
2	1
\.


--
-- Name: board_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rqllnykg
--

SELECT pg_catalog.setval('public.board_id_seq', 1, true);


--
-- Name: board_subject_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rqllnykg
--

SELECT pg_catalog.setval('public.board_subject_id_seq', 1, true);


--
-- Name: budgeting_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rqllnykg
--

SELECT pg_catalog.setval('public.budgeting_category_id_seq', 17, true);


--
-- Name: budgeting_category_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rqllnykg
--

SELECT pg_catalog.setval('public.budgeting_category_type_id_seq', 2, true);


--
-- Name: budgeting_record_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rqllnykg
--

SELECT pg_catalog.setval('public.budgeting_record_id_seq', 1117, true);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rqllnykg
--

SELECT pg_catalog.setval('public.migrations_id_seq', 3, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rqllnykg
--

SELECT pg_catalog.setval('public.user_id_seq', 2, true);


--
-- Name: user_administrated_boards_board PK_0a2810eee8dad0916bb17aff68e; Type: CONSTRAINT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.user_administrated_boards_board
    ADD CONSTRAINT "PK_0a2810eee8dad0916bb17aff68e" PRIMARY KEY ("userId", "boardId");


--
-- Name: budgeting_category PK_512af380143c8ff1fb30f04b5c5; Type: CONSTRAINT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.budgeting_category
    ADD CONSTRAINT "PK_512af380143c8ff1fb30f04b5c5" PRIMARY KEY (id);


--
-- Name: board_subject PK_573d3d2cd4106c33293245bb111; Type: CONSTRAINT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.board_subject
    ADD CONSTRAINT "PK_573d3d2cd4106c33293245bb111" PRIMARY KEY (id);


--
-- Name: board PK_865a0f2e22c140d261b1df80eb1; Type: CONSTRAINT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.board
    ADD CONSTRAINT "PK_865a0f2e22c140d261b1df80eb1" PRIMARY KEY (id);


--
-- Name: user_boards_board PK_878ad615f92edb780a5c45fd9d0; Type: CONSTRAINT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.user_boards_board
    ADD CONSTRAINT "PK_878ad615f92edb780a5c45fd9d0" PRIMARY KEY ("userId", "boardId");


--
-- Name: migrations PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);


--
-- Name: budgeting_record PK_b1e9b3884f829a2607896588590; Type: CONSTRAINT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.budgeting_record
    ADD CONSTRAINT "PK_b1e9b3884f829a2607896588590" PRIMARY KEY (id);


--
-- Name: budgeting_category_type PK_c3573df92b97320c973702810cc; Type: CONSTRAINT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.budgeting_category_type
    ADD CONSTRAINT "PK_c3573df92b97320c973702810cc" PRIMARY KEY (id);


--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- Name: IDX_83146940d4e22ed4b9e82d9443; Type: INDEX; Schema: public; Owner: rqllnykg
--

CREATE INDEX "IDX_83146940d4e22ed4b9e82d9443" ON public.user_administrated_boards_board USING btree ("userId");


--
-- Name: IDX_a1e78b2ee3d6f5b91b4878bbc8; Type: INDEX; Schema: public; Owner: rqllnykg
--

CREATE INDEX "IDX_a1e78b2ee3d6f5b91b4878bbc8" ON public.user_administrated_boards_board USING btree ("boardId");


--
-- Name: IDX_d92c98138733350c58be167b78; Type: INDEX; Schema: public; Owner: rqllnykg
--

CREATE INDEX "IDX_d92c98138733350c58be167b78" ON public.user_boards_board USING btree ("userId");


--
-- Name: IDX_ec241c244980d39996b501f397; Type: INDEX; Schema: public; Owner: rqllnykg
--

CREATE INDEX "IDX_ec241c244980d39996b501f397" ON public.user_boards_board USING btree ("boardId");


--
-- Name: budgeting_category FK_269bc39bfebdea7414b389b6c65; Type: FK CONSTRAINT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.budgeting_category
    ADD CONSTRAINT "FK_269bc39bfebdea7414b389b6c65" FOREIGN KEY ("boardId") REFERENCES public.board(id) ON DELETE CASCADE;


--
-- Name: user_administrated_boards_board FK_83146940d4e22ed4b9e82d94435; Type: FK CONSTRAINT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.user_administrated_boards_board
    ADD CONSTRAINT "FK_83146940d4e22ed4b9e82d94435" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: budgeting_category FK_974b4481b02a5abab70d29c01bd; Type: FK CONSTRAINT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.budgeting_category
    ADD CONSTRAINT "FK_974b4481b02a5abab70d29c01bd" FOREIGN KEY ("typeId") REFERENCES public.budgeting_category_type(id);


--
-- Name: user_administrated_boards_board FK_a1e78b2ee3d6f5b91b4878bbc80; Type: FK CONSTRAINT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.user_administrated_boards_board
    ADD CONSTRAINT "FK_a1e78b2ee3d6f5b91b4878bbc80" FOREIGN KEY ("boardId") REFERENCES public.board(id) ON DELETE CASCADE;


--
-- Name: board FK_c3883bef3207497274cacae9ccc; Type: FK CONSTRAINT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.board
    ADD CONSTRAINT "FK_c3883bef3207497274cacae9ccc" FOREIGN KEY ("subjectId") REFERENCES public.board_subject(id);


--
-- Name: user_boards_board FK_d92c98138733350c58be167b78c; Type: FK CONSTRAINT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.user_boards_board
    ADD CONSTRAINT "FK_d92c98138733350c58be167b78c" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_boards_board FK_ec241c244980d39996b501f3970; Type: FK CONSTRAINT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.user_boards_board
    ADD CONSTRAINT "FK_ec241c244980d39996b501f3970" FOREIGN KEY ("boardId") REFERENCES public.board(id) ON DELETE CASCADE;


--
-- Name: budgeting_record FK_f013431c4ebbfccbb8976107236; Type: FK CONSTRAINT; Schema: public; Owner: rqllnykg
--

ALTER TABLE ONLY public.budgeting_record
    ADD CONSTRAINT "FK_f013431c4ebbfccbb8976107236" FOREIGN KEY ("categoryId") REFERENCES public.budgeting_category(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

