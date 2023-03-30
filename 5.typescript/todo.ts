interface Tarea {
    fechaExpiracion: Date;
    descripcion: string;
    tareaCompletada: boolean;
}

class ToDo {
    private misTareas: Array<Tarea> = [];

    agregarTarea(tarea: Tarea) {
        this.misTareas.push(tarea);
    }

    cambiarEstadoTarea(desc: string, comp: boolean) {
        this.misTareas = this.misTareas.map(tarea => (
            tarea.descripcion === desc ?
                {...tarea, tareaCompletada: comp}
                : tarea
        ));
    }

    // tareasExpiradas(){
    //     return this.misTareas.map(tarea => (
    //         tarea
    //     ))
    // }
}

const todo = new ToDo();

console.log(todo);