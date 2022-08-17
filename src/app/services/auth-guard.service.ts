import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  public odooUser: number;
  public allowedUsers: number[] = [2, 61, 62, 78, 63, 82, 102, 109, 108, 73];

  constructor(
    public router: Router,
    private route: ActivatedRoute,
  ) {}

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.odooUser = params['user_odoo'];
        if (!this.allowedUsers.includes(this.odooUser) || this.odooUser == undefined) {
          this.router.navigate(['noAccess']);
          resolve(false);
        }
          resolve(true);
      });
    })
  }

}
