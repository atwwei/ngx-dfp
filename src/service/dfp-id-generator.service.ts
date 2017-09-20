import { Injectable } from '@angular/core';

@Injectable()
export class DfpIDGeneratorService {

  private generatedIDs = {}

  generateID() {
    let id = null;

    do {
      let number = Math.random().toString().slice(2);
      id = 'gpt-ad-' + number;
    } while (id in this.generatedIDs);

    this.generatedIDs[id] = true;

    return id;
  }

  dfpIDGenerator(element) {
    if (element && element.id && !(element.id in this.generatedIDs)) {
      return element.id;
    }

    let id = this.generateID();
    if (element) element.id = id;

    return id;
  }

  isTaken = function (id) {
    return id in this.generatedIDs;
  }

  isUnique = function (id) {
    return !this.dfpIDGenerator.isTaken(id);
  }

}
