import { Inject, Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import { GoogleDriveConfig } from '../types/googledriveconfig';
import { EFOLDERSIDS } from '../drivexls.module';

@Injectable()
export class GoogleAutenticarService{
  public xlsx;
  constructor(
    @Inject("CONFIG") private config: GoogleDriveConfig,
    @Inject("FOLDERBASEID") private googleDriveFolderBaseId: string,
    @Inject("CONFIG_SHEETID_FILE") public googleXlsxSpreadSheetId: string,
  ) {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: this.config.client_email,
        private_key: this.config.private_key,
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.readonly',
        'https://www.googleapis.com/auth/documents',
        'https://www.googleapis.com/auth/documents.readonly',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/drive.metadata.readonly',
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/spreadsheets.readonly'
       
      ],
    });
     this.xlsx =  google.sheets({version:'v4',auth})
    
    
    
    
  }

}