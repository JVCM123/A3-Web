import { Routes } from '@angular/router';
import { ListaAgendamentosComponent } from './agendamento/lista-agendamentos/lista-agendamentos.component';
import { AdicionarAgendamentoComponent } from './agendamento/adicionar-agendamento/adicionar-agendamento.component';
import { HomeComponent } from './home/home.component';
import { ListarProcedimentosComponent } from './procedimento/listar-procedimentos/listar-procedimentos.component';
import { AdicionarClienteComponent } from './clientes/adicionar-cliente/adicionar-cliente.component';
import { ListarClientesComponent } from './clientes/listar-clientes/listar-clientes.component';

export const routes: Routes = [
    { path: 'listar-agendamentos', component: ListaAgendamentosComponent },
    { path: 'adicionar-agendamento', component: AdicionarAgendamentoComponent },
    { path: 'home', component: HomeComponent },
    { path: 'listar-procedimentos', component: ListarProcedimentosComponent },
    { path: 'adicionar-procedimento', component: AdicionarAgendamentoComponent },
    { path: 'listar-clientes', component: ListarClientesComponent },
    { path: 'adicionar-cliente', component: AdicionarClienteComponent },
    { path: '**', redirectTo: 'home' }
];
