import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params: Params) => {
      //console.log(params);
      this.id = params.id;
    });
  }

  ngOnInit() {}
}
