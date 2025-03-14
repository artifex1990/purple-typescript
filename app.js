"use strict";
class User {
    addSkill(skill) {
        if (Array.isArray(skill)) {
            this.skills.push(...skill);
            return;
        }
        this.skills.push(skill);
    }
}
