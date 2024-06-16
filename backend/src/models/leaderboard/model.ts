import DTO from "./dto";

export default interface Model {
    getAll(): Promise<DTO[]>;
    add(dto: DTO): Promise<DTO[]>;
}