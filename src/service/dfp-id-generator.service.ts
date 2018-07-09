import { Injectable } from '@angular/core';

@Injectable()
export class DfpIDGeneratorService {

  private generatedIDs = {};

  generateID() {
    let id = null;

    do {
      const number = Math.random().toString().slice(2);
      id = 'gpt-ad-' + number;
    } while (id in this.generatedIDs);

    this.generatedIDs[id] = true;

    return id;
  }

  dfpIDGenerator(element) {
    if (element && element.id && !(element.id in this.generatedIDs)) {
      return element.id;
    }

    const id = this.generateID();
    if (element) { element.id = id; }

    return id;
  }

  isTaken(id) {
    return id in this.generatedIDs;
  }

  isUnique(id) {
    return !this.isTaken(id);
  }

}
