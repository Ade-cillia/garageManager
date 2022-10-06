
interface ReqBody {
    [key: string]: string;
}

export function checkCarData(content: ReqBody): Array<String> {
    let errorMessage = [];
    // Check if BodyError
    if (content.brandName == undefined || content.brandName === "") {
        errorMessage.push("champ 'marque' manquant");
    }
    if (content.modelName == undefined || content.modelName === "" ){
        errorMessage.push("champ 'model' manquant");
    }
    if (content.modelEnergy == undefined || content.modelEnergy === ""){
        errorMessage.push("champ 'Model énergétique' manquant");
    }
    if (content.modelPrice == undefined || content.modelPrice === ""){
        errorMessage.push("champ 'prix' manquant");
    }
    if (content.dateBuy == undefined || content.dateBuy === ""){
        errorMessage.push("champ 'date d'achat' manquant");
    }
    return errorMessage;
}
