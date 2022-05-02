/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl> <https://github.com/Milosz08>
 * Silesian University of Technology | Politechnika Śląska
 *
 * File name | Nazwa pliku: shared.actions.ts
 * Last modified | Ostatnia modyfikacja: 02/05/2022, 16:48
 * Project name | Nazwa Projektu: angular-po-schedule-management-client
 *
 * Klient | Client: <https://github.com/Milosz08/Angular_PO_Schedule_Management_Client>
 * Serwer | Server: <https://github.com/Milosz08/ASP.NET_PO_Schedule_Management_Server>
 *
 * Client for the ASP.NET Core application to manage schedule for sample university. Written with the Angular Framework
 * for generating dynamic web applications. Project for the teaching course "Objected Oriented Programming".
 *
 * Klient dla aplikacji ASP.NET Core służącej do zarządzania planem zajęć uczelni. Napisany przy użyciu frameworka
 * Angular do generowania dynamicznych aplikacji webowych. Projekt wykonany na zajęcia "Programowanie
 * Obiektowe".
 */

import { createAction, props } from '@ngrx/store';

export const SET_SUSPENSE_LOADER = '[SHARED] SET SUSPENSE LOADER';
export const SET_SUSPENSE_LOADER_DELAY = '[SHARED] SET SUSPENSE LOADER DELAY';

//----------------------------------------------------------------------------------------------------------------------

export const __setSuspenseLoader = createAction(
    SET_SUSPENSE_LOADER,
    props<{ status: boolean }>(),
);

export const __setSuspenseLoaderDelay = createAction(
    SET_SUSPENSE_LOADER_DELAY,
    props<{ delayInSeconds?: number, status: boolean }>(),
);