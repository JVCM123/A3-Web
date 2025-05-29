import { Routes } from '@angular/router';
import { ListaAgendamentosComponent } from './agendamento/lista-agendamentos/lista-agendamentos.component';
import { AdicionarAgendamentoComponent } from './agendamento/adicionar-agendamento/adicionar-agendamento.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'listar-agendamentos', component: ListaAgendamentosComponent },
    { path: 'adicionar-agendamento', component: AdicionarAgendamentoComponent },
    { path: 'home', component: HomeComponent}
];
