/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl> <https://github.com/Milosz08>
 * Silesian University of Technology | Politechnika Śląska
 *
 * File name | Nazwa pliku: cms-page-routing.module.ts
 * Last modified | Ostatnia modyfikacja: 27/04/2022, 10:06
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminRedirectGuard } from '../../guards/cms-roles-redirectors/administrator-redirect-guard.service';

import { CmsPageComponent } from './cms-page.component';

import { BookingsCmsPageComponent } from './pages/bookings-cms-page/bookings-cms-page.component';
import { NotFoundPageComponent } from '../shared-module/pages/not-found-page/not-found.component';
import { DashboardCmsPageComponent } from './pages/dashboard-cms-page/dashboard-cms-page.component';

import { UsersCmsPageComponent } from './pages/users-cms-page/users-cms-page.component';
import { AddNewUserCmsPageComponent } from './pages/add-new-user-cms-page/add-new-user-cms-page.component';
import { EditUserCmsPageComponent } from './pages/edit-user-cms-page/edit-user-cms-page.component';

import { DepartmentsCmsPageComponent } from './pages/departments-cms-page/departments-cms-page.component';
import { AddNewDepartmentCmsPageComponent } from './pages/add-new-department-cms-page/add-new-department-cms-page.component';
import { EditDepartmentCmsPageComponent } from './pages/edit-department-cms-page/edit-department-cms-page.component';

import { CathedralsCmsPageComponent } from './pages/cathedrals-cms-page/cathedrals-cms-page.component';
import { AddNewCathedralCmsPageComponent } from './pages/add-new-cathedral-cms-page/add-new-cathedral-cms-page.component';
import { EditCathedralCmsPageComponent } from './pages/edit-cathedral-cms-page/edit-cathedral-cms-page.component';

import { StudyRoomsCmsPageComponent } from './pages/study-rooms-cms-page/study-rooms-cms-page.component';
import { AddNewStudyRoomCmsPageComponent } from './pages/add-new-study-room-cms-page/add-new-study-room-cms-page.component';
import { EditStudyRoomCmsPageComponent } from './pages/edit-study-room-cms-page/edit-study-room-cms-page.component';

import { StudySpecializationCmsPageComponent } from './pages/study-specialization-cms-page/study-specialization-cms-page.component';
import { AddNewStudySpecializationCmsPageComponent } from './pages/add-new-study-specialization-cms-page/add-new-study-specialization-cms-page.component';
import { EditStudySpecializationCmsPageComponent } from './pages/edit-study-specialization-cms-page/edit-study-specialization-cms-page.component';

import { StudySubjectsCmsPageComponent } from './pages/study-subjects-cms-page/study-subjects-cms-page.component';
import { AddNewStudySubjectCmsPageComponent } from './pages/add-new-study-subject-cms-page/add-new-study-subject-cms-page.component';
import { EditStudySubjectCmsPageComponent } from './pages/edit-study-subject-cms-page/edit-study-subject-cms-page.component';

import { StudyGroupsCmsPageComponent } from './pages/study-groups-cms-page/study-groups-cms-page.component';
import { AddNewStudyGroupCmsPageComponent } from './pages/add-new-study-group-cms-page/add-new-study-group-cms-page.component';
import { EditStudyGroupCmsPageComponent } from './pages/edit-study-group-cms-page/edit-study-group-cms-page.component';

//----------------------------------------------------------------------------------------------------------------------

const routes: Routes = [
    {
        path: 'panel', component: CmsPageComponent, children: [ {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
        }, {
            path: 'dashboard',
            component: DashboardCmsPageComponent
        }, {
            path: 'bookings',
            component: BookingsCmsPageComponent
        }, {
            path: 'departments',
            component: DepartmentsCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'departments/add-department',
            component: AddNewDepartmentCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'departments/edit-department/:deptId',
            component: EditDepartmentCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'cathedrals',
            component: CathedralsCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'cathedrals/add-cathedral',
            component: AddNewCathedralCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'cathedrals/edit-cathedral/:cathId',
            component: EditCathedralCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'study-specializations',
            component: StudySpecializationCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'study-specializations/add-study-specialization',
            component: AddNewStudySpecializationCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'study-specializations/edit-study-specialization/:specId',
            component: EditStudySpecializationCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'study-rooms',
            component: StudyRoomsCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'study-rooms/add-study-room',
            component: AddNewStudyRoomCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'study-rooms/edit-study-room/:roomId',
            component: EditStudyRoomCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'study-subjects',
            component: StudySubjectsCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'study-subjects/add-study-subject',
            component: AddNewStudySubjectCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'study-subjects/edit-study-subject/:subjId',
            component: EditStudySubjectCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'study-groups',
            component: StudyGroupsCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'study-groups/add-study-group',
            component: AddNewStudyGroupCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'study-groups/edit-study-group/:groupId',
            component: EditStudyGroupCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'users',
            component: UsersCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'users/add-new-user',
            component: AddNewUserCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: 'users/edit-user/:userId',
            component: EditUserCmsPageComponent,
            canActivate: [ AdminRedirectGuard ],
        }, {
            path: '**',
            component: NotFoundPageComponent,
            pathMatch: 'full'
        }, ],
    },
    { path: '', redirectTo: 'admin-panel', pathMatch: 'full' },
];

//----------------------------------------------------------------------------------------------------------------------

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule,
    ],
})
export class CmsPageRoutingModule {}