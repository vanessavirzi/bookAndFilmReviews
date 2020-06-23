import {TypeElement} from "../../environments/environment";

/**
 * Element interface like BE entity
 */
export interface ElementApp {
  name: string,
  type: TypeElement,
  comment: string
}
