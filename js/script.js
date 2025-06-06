//Função que adiciona comportamento ao Header/navbar responsiva
import { headerBehavior } from "./header.js";
//Função que adiciona comportamento ao problema (hero)
import { problemaBehavior } from "./problema.js";  
//Função que adiciona comportamento aos cards de tecnologias
import { tecnologiasBehavior } from "./tecnologias.js";         
//Função que adiciona comportamento aos objetivos   
import { objetivosBehavior } from "./objetivos.js";
//Função que adiciona comportamento ao público alvo
import { publicoBehavior } from "./publico.js";
//Função que adiciona comportamento à imagem do dia a dia
import { diaADiaBehavior } from "./dia-a-dia.js";
//Função que adiciona comportamento ao scroll suave
import { scrollSuave } from "./scroll-suave.js";


headerBehavior();
problemaBehavior();
tecnologiasBehavior();
objetivosBehavior();
publicoBehavior();
diaADiaBehavior();
scrollSuave();