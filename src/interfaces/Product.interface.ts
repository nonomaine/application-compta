export interface ProductInterface {

    
    id: number,
    date: string | number | Date,
    entreprise: string,
    refmission: string,
    description: string,
    tache: {
        tache1:{
            def: string,
            colordef: string,
        },
        
    },
    horaire: string,
    color: string,
    
}