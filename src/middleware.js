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

        if (!id) {
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