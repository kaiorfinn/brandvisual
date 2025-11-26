function showVariant(id){
    document.querySelectorAll('.variant').forEach(v=>v.classList.remove('active'));
    document.querySelector('#'+id).classList.add('active');
    document.querySelectorAll('.toggle-btn').forEach(b=>b.classList.remove('active'));
    document.querySelector('[data-target="'+id+'"]').classList.add('active');
}