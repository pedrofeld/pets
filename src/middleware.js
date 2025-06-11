import { pets } from "./dados.js";

export const validarCampos = (req, res, next) => {
    try {
        const { nome, raca, idade, nomeTutor } = req.body;

        if (!nome || !raca || !idade || !nomeTutor) {
            return res.status(400).send({
                ok: false,
                mensagem: "Todos os campos são obrigatórios"
            });
        }

        next();
    } catch (error) {
        res.status(500).send({
            ok: false,
            erro: error.message
        });
    }
};

export const validarId = (req, res, next) => {
    try {
        const id = req.params.id;

        if (!id || id === undefined || id === null || id === "") {
            return res.status(400).send({
                ok: false,
                mensagem: "ID é obrigatório"
            });
        }

        next();
    } catch (error) {
        res.status(500).send({
            ok: false,
            erro: error.message
        });
    }
}

export const validarIndex = (req, res, next) => {
    try {
        const id = req.params.id;
    
        const petIndex = pets.findIndex(p => p.id === id);

        if (petIndex < 0) {
            return res.status(404).send({
            ok: false,
            mensagem: "Pet não encontrado"
            });
        }

        next();
    } catch (error) {
        res.status(500).send({
            ok: false,
            erro: error.message
        });
    }
}