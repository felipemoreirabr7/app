const db = require("../config/db")



module.exports = {
   

    async CreateHorario(data){
        
        const {idFolhaPonto,
            dtFolhaPonto,
            idProfessor,
            hrInicioAula,
            hrFimAula,
            aaPeriodoLetivo,
            nuPeriodoLetivo,
            nmTurno,
            sgUnidadeFuncional,
            nmBloco	,
            nmCurso,
            nmDisciplina,
            coTurma,
            deEspacoFisico,
            nmPessoa,
            nuMatricula,
            nuDVMatricula} = data

        const query = `INSERT INTO horarios (
            id_folha_ponto,
            dt_folha_ponto,
            id_professor,
            hr_inicio_aula,
            hr_fim_aula,
            aa_periodo_letivo,
            nu_periodo_letivo,
            nm_turno,
            sg_unidade_funcional,
            nm_bloco,
            nm_curso,
            nm_disciplina,
            co_turma,
            de_espaco_fisico,
            nm_pessoa,
            nu_matricula,
            nu_dv_matricula
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`


        const values = [
            idFolhaPonto,
            dtFolhaPonto,
            idProfessor,
            hrInicioAula,
            hrFimAula,
            aaPeriodoLetivo,
            nuPeriodoLetivo,
            nmTurno,
            sgUnidadeFuncional,
            nmBloco	,
            nmCurso,
            nmDisciplina,
            coTurma,
            deEspacoFisico,
            nmPessoa,
            nuMatricula,
            nuDVMatricula
        ]

        await db.query(query, values)


    },
    createAula(data){
        const {horario, dia, disciplina, professor} = data

        console.log( horario, dia, disciplina, professor)
    }
    
}
   