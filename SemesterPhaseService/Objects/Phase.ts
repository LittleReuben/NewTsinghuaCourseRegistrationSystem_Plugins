export enum Phase {
    phase1 = 'phase1',
    phase2 = 'phase2'
}

export const phaseList = Object.values(Phase)

export function getPhase(newType: string): Phase {
    return phaseList.filter(t => t === newType)[0]
}
