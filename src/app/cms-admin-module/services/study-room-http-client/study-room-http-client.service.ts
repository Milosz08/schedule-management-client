/*
 * Copyright (c) 2024 by Miłosz Gilga <https://miloszgilga.pl>
 * Silesian University of Technology
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import {
  AddUpdateStudyRoomRequest,
  AddUpdateStudyRoomResponse,
  StudyRoomData,
} from '~/cms-admin-module/models/study-room.model';
import { Pagination } from '~/cms-module/models/pagination.model';
import { AbstractHttpClientProvider } from '~/shared-module/service/abstract-http-client-provider';

@Injectable()
export class StudyRoomHttpClientService extends AbstractHttpClientProvider {
  constructor(private readonly _httpClient: HttpClient) {
    super();
  }

  getStudyRooms$(params: Params): Observable<Pagination<StudyRoomData>> {
    return this._httpClient.get<Pagination<StudyRoomData>>(
      `${this._apiUrl}/api/v1/studyroom/all/pageable`,
      { params }
    );
  }

  createNewStudyRoom$(
    req: AddUpdateStudyRoomRequest
  ): Observable<AddUpdateStudyRoomResponse> {
    return this._httpClient.post<AddUpdateStudyRoomResponse>(
      `${this._apiUrl}/api/v1/studyroom`,
      req
    );
  }

  updateStudyRoom$(
    id: number,
    req: AddUpdateStudyRoomRequest
  ): Observable<AddUpdateStudyRoomResponse> {
    return this._httpClient.put<AddUpdateStudyRoomResponse>(
      `${this._apiUrl}/api/v1/studyroom/${id}`,
      req
    );
  }
}
