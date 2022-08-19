//Funciones reutilizables para los arrays

//Verifica si un producto ya está contenido dentro del array
//cuenta los productos iguales en el carrito
export const countDuplicateItemArray=(value, array)=>{
    let count=0;
    array.forEach(item=>{
        if(item==value) {
            count ++;
        };
    });
    return count;
};

//Elimina los elementos repetidos. Cuenta los elementos únicos en el carrito
//Automáticamente regresa el array sin duplicados
export const removeItemDuplicates=(array)=>{
    return Array.from(new Set(array));
};

//recibe el aray y el item a eliminar del array. Baja las cantidades de elementos en el carrito
/*El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. */
export const removeItemArray=(array, item)=>{
    const index=array.indexOf(item);//obtiene el índice
    if(index >-1) {//significa que encontró al elemento dentro del array
        array.splice(index, 1);
    };
    return array;//retorna el array sin el elemento eliminado
};