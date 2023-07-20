class EnemyFactory {
    generateFlyingEnemy(name) {
        class FlyingEnemy {
            constructor(flyingSkill) {
                this.name = flyingSkill;
            }

            fly() {
                console.log(`${this.name} can fly!`)
            }
        }

        return new FlyingEnemy(name);
    }
};

const factory = new EnemyFactory();
const superman = factory.generateFlyingEnemy('superman');
superman.fly(); // superman can fly!