import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { skilldata } from './skills';
@Injectable()
export class SkillService {

  private profile:{};

  private headers = new Headers({'Content-Type': 'application/json'});
  private skillsurl = 'app/skills/skills.json';  // URL to web api
  private mircoServicesUrl = 'app/skills/mircoservices.json';  // URL to web api
  private pcfUrl = 'app/skills/pcf.json';  // URL to web api

  constructor(private http: Http) { }
  
  getskills(){
       return this.http.get(this.skillsurl).toPromise().then(res => res.json());
  }

  getMircoServices(){
       return this.http.get(this.mircoServicesUrl).toPromise().then(res => res.json());
  }

  getPcf(){
       return this.http.get(this.pcfUrl).toPromise().then(res => res.json());
  }


  //set

  /*getskills(): Promise<void> {
    return this.http.get(this.skillsurl).toPromise()
               .then(response => response.json().data as skilldata[])
               .catch(this.handleError);
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
  delete(id: number): Promise<void> {
    let url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }*/
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}