import { checkService } from '../domain/use-cases/checks/check-service';
import { CronService } from './cron/con-service';

export class Server {

  public static start() {
    console.log('Server started...')

    CronService.createJob(
      '*/5 * * * * *',
      () => {
        const url = 'http://google.com';
        new checkService( 
          () => console.log(`${url} is OK`), 
          ( error ) => console.log(error)
        ).execute(url);
      }
    );
    
  } 
}

