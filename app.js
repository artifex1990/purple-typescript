"use strict";
class User {
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.concat(skillOrSkills);
        }
    }
}
function run(distance) {
    return typeof distance === 'number' ? distance : `${distance} метров`;
}
run(123);
