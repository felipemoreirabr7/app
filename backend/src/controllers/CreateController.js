const db = require("../config/db")
const Aula = require("../models/aula")

module.exports = {
    async createAula(req, res){
        const resultDisciplinas = await db.query("SELECT * FROM disciplinas")
        const disciplinas = resultDisciplinas.rows

        const resultHorarios = await db.query("SELECT * FROM horarios")
        const horarios = resultHorarios.rows

        const resultProfessores = await db.query("SELECT * FROM professor")
        const professores = resultProfessores.rows

        const resultDias = await db.query("SELECT * FROM dias")
        const dias = resultDias.rows

        //console.log(disciplinas, horarios, professores, dias)

        res.render("home/index", {disciplinas, horarios, professores, dias})
    },

    async postAula(req, res){
        const {horario, dia, disciplina, professor} = req.body
        console.log(horario, dia, disciplina, professor)
        
        await Aula.createAula(req.body)
        res.redirect("/")
    }
}