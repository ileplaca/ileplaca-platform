import Swal from 'sweetalert2'

export const successAlert = (title: string) => {
  Swal.fire({
    title,
    icon: 'success',
    position: 'top-right'
  });
}

export const errorAlert = () => {
  Swal.fire({
    title: 'Something went wrong',
    icon: 'success',
    position: 'top-right'
  });
}