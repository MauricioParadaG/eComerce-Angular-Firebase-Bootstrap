import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/firebaseOrder/order.service';
import { AuthService } from 'src/app/services/auth.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$;
  userId: string;

  constructor(
    private orderService: OrderService,
    private authService: AuthService
  ) {
    authService.user$.subscribe(
      u => {
        this.userId = u.uid;
        this.orders$ = orderService.getOrdersByUser(this.userId);
      });

    /*
    this.orders$ = authService.user$.pipe(switchMap(
     user => { return orderService.getOrdersByUser(user.uid); }
     ));
    */
  }

  ngOnInit() {
  }

}
