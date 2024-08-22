export interface Adapter<DTO, MODEL> {
  toModel(dto: DTO): MODEL
}
