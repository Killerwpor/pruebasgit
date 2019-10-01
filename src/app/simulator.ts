import { chartsData } from './chartsData';
import { barData } from './barData';
import { doughnutData } from './doughnutData';

import { contact } from './contact';
export class simulator{
    name: string;
    icon: string;
    contacts: contact[];
    messages: string[];
    progress: doughnutData[];
    charts: chartsData;
}