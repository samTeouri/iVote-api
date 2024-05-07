import { AgentElectoral } from "../models/AgentElectoral";
import { Citoyen } from "../models/Citoyen"

export const seedAgentsElectoraux = async () => {
    await Citoyen.findOne({
        where: {
            nom: 'LARE',
        }
    }).then(async (citoyen: Citoyen | null) => {
        await citoyen?.createAgentElectoral({
            numero: 'AG-LARD20241',
        }).then(async (agentElectoral: AgentElectoral) => {
            await agentElectoral.setBureauVote(1);
        }).catch(reason =>{
            console.error(`Electoral agent creation failed : ${reason}`); 
        });
    });
}