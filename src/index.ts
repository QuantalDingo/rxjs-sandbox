import { of } from "rxjs";

const a = of(5, 4, 3, 2, 1);
a.subscribe(console.log);
