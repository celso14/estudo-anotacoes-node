import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

interface UserInstance extends Model{
    id: number;
    name: string;
    age: number;
}

export const User = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('name').toUpperCase(); // O get vai rodar uma função assim que o sistema pegar os valores do banco de dados
        },
    },
    firstLetterOfName:{
        type: DataTypes.VIRTUAL,
        get() {
            return this.getDataValue('name').charAt(0);
        },
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18,
        set(val:number) {
            if(val < 18){
                val = 18;
            }
            this.setDataValue('age', val); // o set vai rodar uma função antes do sistema settar os valores no banco de dados
        },
    }
}, {
    tableName: 'users_info',
    timestamps: false
});