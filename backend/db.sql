CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "user1" text NOT NULL,
  "name" text NOT NULL,
  "password" text NOT NULL
);

CREATE TABLE "ponto" (
  "user1" text NOT NULL,
  "lat" text NOT NULL,
  "long" text NOT NULL,
  "campus" text NOT NULL
);

CREATE TABLE "horarios" (
  "id_folha_ponto" SERIAL PRIMARY KEY,
 	"dt_folha_ponto" timestamp,
  "id_professor" int NOT NULL,
  "hr_inicio_aula" time(0) NOT NULL,
  "hr_fim_aula" time(0) NOT NULL,
  "aa_periodo_letivo" int NOT NULL,
  "nu_periodo_letivo" int NOT NULL,
  "nm_turno" text NOT NULL,
  "sg_unidade_funcional" text NOT NULL,
  "nm_bloco" text NOT NULL,
  "nm_curso" text NOT NULL,
  "nm_disciplina" text NOT NULL,
  "co_turma" text NOT NULL,
  "de_espaco_fisico" text NOT NULL,
  "nm_pessoa" text NOT NULL,
  "nu_matricula" int NOT NULL,
  "nu_dv_matricula" int NOT NULL
);

CREATE TABLE FolhaPonto (
idFolhaPonto INT IDENTITY(1, 1) NOT NULL
,dtFolhaPonto DATE NOT NULL
,idProfessor INT NOT NULL
,hrInicioAula TIME(0) NOT NULL
,hrFimAula TIME(0) NOT NULL
,aaPeriodoLetivo SMALLINT NOT NULL
,nuPeriodoLetivo TINYINT NOT NULL
,nmTurno VARCHAR(20) NOT NULL
,sgUnidadeFuncional VARCHAR(20) NOT NULL
,nmCampus VARCHAR(30) NOT NULL
,nmBloco VARCHAR(30) NOT NULL
,nmCurso VARCHAR(100) NOT NULL
,nmDisciplina VARCHAR(100) NOT NULL
,coTurma VARCHAR(10) NOT NULL
,deEspacoFisico VARCHAR(100) NOT NULL
,nmPessoa VARCHAR(100) NOT NULL
,nuMatricula VARCHAR(10) NOT NULL
,nuDVMatricula CHAR(1) NOT NULL
)

CREATE TABLE horarios (
"id" SERIAL PRIMARY KEY,
"horario" time(0) NOT NULL
)

CREATE TABLE disciplinas (
"id" SERIAL PRIMARY KEY,
"name" text NOT NULL
)

CREATE TABLE professor (
"id" SERIAL PRIMARY KEY,
 "name" text NOT NULL
)

CREATE TABLE aulas (
"id" SERIAL PRIMARY KEY,
"name" text NOT NULL,
"professor" text NOT NULL,
"professor_id" int NOT NULL,
"status" int NOT NULL,
)

CREATE TABLE dias (
"id" SERIAL PRIMARY KEY,
"name" text NOT NULL
)

drop table horarios