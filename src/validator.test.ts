// src/validator.test.ts
// O compilador de TypeScript resolverá o módulo JavaScript de forma transparente
import validarChamado from "./validator";

describe("Testes do chamado", () => {

    test("titulo com menos de 5 caracteres", () => {
        expect(() => validarChamado("abc")).toThrow();
    });

    test("titulo valido", () => {
        expect(validarChamado("Problema no sistema")).toBe(true);
    });

    test("titulo com mais de 100 caracteres", () => {
        const titulo = "a".repeat(101);
        expect(() => validarChamado(titulo)).toThrow();
    });

});