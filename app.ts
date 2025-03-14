class User {
    skills: string[];

    addSkill(skill: string): void;
    addSkill(skill: string[]): void;
    addSkill(skill: string | string[]): void {
        if (Array.isArray(skill)) {
            this.skills.push(...skill);
            return;
        }

        this.skills.push(skill);
    }
}