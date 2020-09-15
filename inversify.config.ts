import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from './types';
import { IMainPage } from './cypress/integration/automation-core-pages/page-contracts/imain.page';
import { MainPage } from './cypress/integration/automation-core-pages/page-objects-models/main.page';

let container = new Container();
container.bind<IMainPage>(TYPES.IMainPage).to(MainPage);

export default container;