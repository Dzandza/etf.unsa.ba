import { Injectable } from '@angular/core';
import { Project } from '../../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [
    {
      id: 1,
      title: "Napredne strukture upravljanja vjetroagregatom s ciljem povećanja proizvodnje električne energije",
      leader: "Jasmin Velagić",
      financing: "Federalno ministarstvo obrazovanja i nauke",
      start: new Date(2017, 1),
      end: new Date(2018, 1),
      scope: "national"
    },
    {
      id: 2,
      title: "Istraživanje impulsnih karakteristika dalekovodnih stubova",
      leader: "Zijad Bajramović",
      financing: "Federalno ministarstvo obrazovanja i nauke",
      start: new Date(2017, 1),
      end: new Date(2018, 1),
      scope: "national"
    },
    {
      id: 3,
      title: "Razvoj tehnika vizualizacije u e-learning sistemima prilagođenih različitim stilovima učenja",
      leader: "Haris Šupić",
      financing: "Federalno ministarstvo obrazovanja i nauke",
      start: new Date(2017, 1),
      end: new Date(2018, 1),
      scope: "national"
    },
    {
      id: 4,
      title: "Terenska mobilna platforma sa robotskim manipulatorom zasnovana na dijeljenjom autonomnom upravljanju",
      leader: "Jasmin Velagić",
      financing: "Ministarstvo za obrazovanje, nauku i mlade Kantona Sarajevo ",
      start: new Date(2016, 9),
      end: new Date(2017, 9),
      scope: "national"
    },
    {
      id: 5,
      title: "Višedomensko 3D mapiranje, inspekcija i visokoprecizna digitalizacija objekata kulturnog naslijeđa heterogenim robotskim sistemom",
      leader: "Jasmin Velagić",
      financing: "Ministarstvo civilnih poslova BiH",
      start: new Date(2016, 8),
      end: new Date(2017, 8),
      scope: "national"
    },
    {
      id: 6,
      title: "Razvoj modela za proračun parametara kompleksnih uzemljivačkih sistema",
      leader: "Irfan Turković",
      financing: "Federalno ministarstvo obrazovanja i nauke ",
      start: new Date(2016, 0),
      end: new Date(2017, 0),
      scope: "national"
    },
    {
      id: 7,
      title: "iMARECULTURE -  iMmersive serious games and Augmented REality as tools to raise awareness and access to European underwater CULTURal heritagE ",
      coordinator: "Cyprus University of Technology",
      leader: "Selma Rizvić",
      financing: "Horizon 2020 ",
      start: new Date(2016, 10),
      end: new Date(2019, 9),
      website: "http://imareculture.weebly.com/",
      scope: "international"
    },
    {
      id: 8,
      title: "MORUS- Unmanned system for maritime security and environmental monitoring",
      coordinator: "Faculty of Electrical Engineering and Computing, University of Zagreb",
      leader: "Adnan Tahirović",
      financing: "The NATO Science for Peace and Security Programme",
      start: new Date(2015, 8),
      end: new Date(2018, 8),
      website: "https://www.fer.unizg.hr/morus",
      scope: "international"
    },
    {
      id: 9,
      title: "Quadrivo pro, ATV path planing on partially known rough terrains",
      leader: "Adnan Tahirović",
      financing: "Politecnico di Milano (DIEB)",
      start: new Date(2013, 5),
      end: new Date(2015, 6),
      scope: "international"
    },
    {
      id: 10,
      title: "Tackling the \"Digital Divide\" in SEE by using the capacity of DTT networks",
      leader: "Mesud Hadžialić",
      financing: "SEE Programme ERDF/IPA",
      start: new Date(2012, 9),
      end: new Date(2014, 10),
      scope: "international"
    },
    {
      id: 11,
      title: "BUZZAAR webmap",
      leader: "Samim Konjicija",
      financing: "Ecole Polytechnique Federale de Lausanne",
      start: new Date(2012, 4),
      end: new Date(2014, 10),
      scope: "international"
    },
    {
      id: 12,
      title: "V-MusT.net - Virtual Museums Transnational Network",
      coordinator: "Consiglio Nazionale delle Ricerche - CNR ITABC, Italy",
      leader: "Selma Rizvić",
      financing: "EU FP7-ICT",
      start: new Date(2011, 1),
      end: new Date(2015, 0),
      website: "http://www.v-must.net/",
      scope: "international"
    },
    {
      id: 13,
      title: "ThermalMapper - Thermal 3D Modeling of Indoor Environments for Saving Energy",
      coordinator: "Jacobs University Bremen gGmbH, Germany ",
      leader: "Jasmin Velagić",
      financing: "European Commission (FP7 SEE-ERA-NET PLUS)",
      start: new Date(2010, 10),
      end: new Date(2012, 8),
      website: "http://www.faculty.jacobs-university.de/anuechter/thermalmapper.html",
      scope: "international"
    },
  ]

  constructor() { }

  public getNationalProjects(): Project[] {
    return this.projects.filter(project => project.scope === "national");
  }


  public getInternationalProjects(): Project[] {
    return this.projects.filter(project => project.scope === "international");
  }
}
