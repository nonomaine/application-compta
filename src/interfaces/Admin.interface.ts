export interface AdminInterface {

    
    id: number,
    identite: {
        prenom: string,
        email: string,
        nom: string,
        telephone: string ,
    },
    entreprise: {
        raisonSociale: string,
        siren: number,
        siret: number,
        adresse: string,
        codepostal: number,
        ville: string,
        pays: string,
        tvaextra: string,
        microentreprise: boolean,
        charge: string,

    },
       
}