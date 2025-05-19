function SideMenu() {
  return (
    <aside className="menu dashboard-sidemenu">
      <p className="menu-label">Navegação</p>
      <ul className="menu-list">
        <li>
          <a className="is-active">Dashboard</a>
        </li>
        <li>
          <a>Configurações</a>
        </li>
        <li>
          <a>Sobre</a>
        </li>
      </ul>
    </aside>
  );
}
export default SideMenu;
