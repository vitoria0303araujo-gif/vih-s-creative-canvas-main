import React, { useState } from "react";
import { usePortfolioCMS, PostItem, ClientProfile } from "@/contexts/PortfolioCMSContext";
import {
  X,
  Plus,
  Trash2,
  Edit3,
  Check,
  RotateCcw,
  Sparkles,
  User,
  Film,
  FileText,
  Lightbulb,
  ExternalLink,
  ShieldCheck,
  Image as ImageIcon
} from "lucide-react";

export function AdminCMSModal() {
  const {
    clients,
    activeClientId,
    setActiveClientId,
    updateClientProfile,
    addPost,
    updatePost,
    deletePost,
    resetToDefaults,
    isAdminOpen,
    setIsAdminOpen,
  } = usePortfolioCMS();

  const [activeTab, setActiveTab] = useState<"profile" | "posts">("posts");
  const [editingPost, setEditingPost] = useState<PostItem | null>(null);
  const [isAddingPost, setIsAddingPost] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const activeClient = clients.find((c) => c.id === activeClientId) || clients[0];

  if (!isAdminOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-[110] bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 animate-in slide-in-from-top-4">
          <Check className="w-5 h-5" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="relative w-full max-w-5xl max-h-[92vh] bg-card text-card-foreground rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden">
        {/* HEADER DO PAINEL CMS SELETORES */}
        <div className="p-4 sm:p-6 border-b border-border bg-muted/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center font-bold shadow-inner">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-foreground tracking-tight">
                  Painel de Controle do Portfólio (CMS)
                </h3>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-500 font-bold border border-amber-500/30">
                  Modo Editor
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Pressione <kbd className="px-1.5 py-0.5 bg-background border rounded font-mono text-[10px]">Ctrl + V + I</kbd> para fechar.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (confirm("Tem certeza que deseja restaurar todas as informações para o padrão original?")) {
                  resetToDefaults();
                  showToast("Dados restaurados para o padrão original!");
                }
              }}
              className="text-xs px-3 py-1.5 rounded-lg border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 font-medium"
              title="Restaurar padrão do sistema"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restaurar Padrões
            </button>

            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* BARRA DE SELEÇÃO DE CLIENTE / PROJETO */}
        <div className="px-4 sm:px-6 py-3 border-b border-border bg-background flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-bold shrink-0 mr-2">
            Cliente / Projeto:
          </span>
          {clients.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveClientId(c.id);
                setEditingPost(null);
                setIsAddingPost(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 border ${
                c.id === activeClient.id
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-muted/50 hover:bg-muted text-muted-foreground border-border/50"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* TABS NAVEGAÇÃO INTERNA */}
        <div className="flex border-b border-border bg-card">
          <button
            onClick={() => {
              setActiveTab("posts");
              setEditingPost(null);
              setIsAddingPost(false);
            }}
            className={`flex-1 py-3 text-xs font-bold font-mono uppercase tracking-wider flex items-center justify-center gap-2 border-b-2 transition-colors ${
              activeTab === "posts"
                ? "border-primary text-primary bg-primary/5"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Film className="w-4 h-4" />
            Gerenciar Publicações ({activeClient.posts.length})
          </button>

          <button
            onClick={() => {
              setActiveTab("profile");
              setEditingPost(null);
              setIsAddingPost(false);
            }}
            className={`flex-1 py-3 text-xs font-bold font-mono uppercase tracking-wider flex items-center justify-center gap-2 border-b-2 transition-colors ${
              activeTab === "profile"
                ? "border-primary text-primary bg-primary/5"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <User className="w-4 h-4" />
            Editar Perfil & Estratégia
          </button>
        </div>

        {/* CONTEÚDO PRINCIPAL DO MODAL */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* TAB 1: EDITAR PERFIL DO CLIENTE */}
          {activeTab === "profile" && (
            <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Nome do Cliente / Marca</label>
                  <input
                    type="text"
                    value={activeClient.name}
                    onChange={(e) => updateClientProfile(activeClient.id, { name: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Usuário Instagram (@username)</label>
                  <input
                    type="text"
                    value={activeClient.username}
                    onChange={(e) => updateClientProfile(activeClient.id, { username: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-foreground mb-1">Subtítulo / Nicho de Atuação</label>
                  <input
                    type="text"
                    value={activeClient.subtitle}
                    onChange={(e) => updateClientProfile(activeClient.id, { subtitle: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-foreground mb-1">Biografia (Bio do Instagram)</label>
                  <textarea
                    rows={3}
                    value={activeClient.bio}
                    onChange={(e) => updateClientProfile(activeClient.id, { bio: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none font-sans"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-foreground mb-1">Foco da Estratégia de Marketing</label>
                  <input
                    type="text"
                    value={activeClient.foco}
                    onChange={(e) => updateClientProfile(activeClient.id, { foco: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Número de Seguidores (ex: 45,8K)</label>
                  <input
                    type="text"
                    value={activeClient.followersCount}
                    onChange={(e) => updateClientProfile(activeClient.id, { followersCount: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Número de Publicações (ex: 412)</label>
                  <input
                    type="text"
                    value={activeClient.postsCount}
                    onChange={(e) => updateClientProfile(activeClient.id, { postsCount: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none font-mono"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-foreground mb-1">URL do Avatar / Logotipo</label>
                  <input
                    type="text"
                    value={activeClient.avatarUrl}
                    onChange={(e) => updateClientProfile(activeClient.id, { avatarUrl: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => showToast("Perfil do cliente salvo com sucesso!")}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-colors flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Salvar Alterações do Perfil
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: GERENCIAR PUBLICAÇÕES DO CLIENTE */}
          {activeTab === "posts" && !editingPost && !isAddingPost && (
            <div className="space-y-6 animate-in fade-in">
              <div className="flex justify-between items-center bg-muted/30 p-4 rounded-xl border border-border">
                <div>
                  <h4 className="font-bold text-sm text-foreground">
                    Publicações de {activeClient.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Edite legendas, explicações de estratégias, capas ou adicione novos posts.
                  </p>
                </div>

                <button
                  onClick={() => setIsAddingPost(true)}
                  className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs flex items-center gap-1.5 shadow hover:opacity-90 transition-opacity"
                >
                  <Plus className="w-4 h-4" />
                  Nova Publicação
                </button>
              </div>

              {/* GRID DE POSTS COM BOTÕES EDITAR E EXCLUIR */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {activeClient.posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-card border border-border rounded-xl p-3 space-y-3 flex flex-col justify-between shadow-sm hover:shadow transition-shadow"
                  >
                    <div className="space-y-2">
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-900 border border-border/50">
                        {post.posterUrl ? (
                          <img src={post.posterUrl} alt={post.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                            <ImageIcon className="w-8 h-8 opacity-40" />
                          </div>
                        )}
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-mono font-bold uppercase">
                          {post.type}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono uppercase text-primary font-bold">
                          {post.strategy}
                        </span>
                        <h5 className="font-bold text-sm text-foreground leading-snug line-clamp-1">
                          {post.title}
                        </h5>
                      </div>

                      <div className="text-[11px] text-muted-foreground space-y-1 line-clamp-2">
                        <strong className="text-foreground">Legenda:</strong> {post.caption || "Sem legenda."}
                      </div>

                      <div className="text-[11px] text-amber-500/90 bg-amber-500/10 p-2 rounded-lg line-clamp-2">
                        <strong className="text-amber-500">Estratégia:</strong> {post.strategyExplanation || "Sem explicação cadastrada."}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2 border-t border-border">
                      <button
                        onClick={() => setEditingPost(post)}
                        className="flex-1 py-1.5 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-bold transition-colors flex items-center justify-center gap-1"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        Editar
                      </button>

                      <button
                        onClick={() => {
                          if (confirm(`Deseja realmente excluir a publicação "${post.title}"?`)) {
                            deletePost(activeClient.id, post.id);
                            showToast("Publicação removida com sucesso!");
                          }
                        }}
                        className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white transition-colors"
                        title="Excluir publicação"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FORMULÁRIO DE CRIAÇÃO OU EDIÇÃO DE POST */}
          {(editingPost || isAddingPost) && (
            <PostFormModal
              clientId={activeClient.id}
              initialPost={editingPost}
              onClose={() => {
                setEditingPost(null);
                setIsAddingPost(false);
              }}
              onSave={(savedPost) => {
                if (editingPost) {
                  updatePost(activeClient.id, editingPost.id, savedPost);
                  showToast("Publicação atualizada!");
                } else {
                  addPost(activeClient.id, savedPost);
                  showToast("Nova publicação adicionada!");
                }
                setEditingPost(null);
                setIsAddingPost(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function PostFormModal({
  clientId,
  initialPost,
  onClose,
  onSave,
}: {
  clientId: string;
  initialPost: PostItem | null;
  onClose: () => void;
  onSave: (postData: Omit<PostItem, "id">) => void;
}) {
  const [title, setTitle] = useState(initialPost?.title || "");
  const [type, setType] = useState<"video" | "carousel">(initialPost?.type || "video");
  const [strategy, setStrategy] = useState(initialPost?.strategy || "Branding & Autoridade");
  const [likes, setLikes] = useState(initialPost?.likes || "120");
  const [comments, setComments] = useState(initialPost?.comments || "15");
  const [views, setViews] = useState(initialPost?.views || "1.2K");
  const [posterUrl, setPosterUrl] = useState(initialPost?.posterUrl || "");
  const [videoUrl, setVideoUrl] = useState(initialPost?.videoUrl || "");
  const [caption, setCaption] = useState(initialPost?.caption || "");
  const [strategyExplanation, setStrategyExplanation] = useState(
    initialPost?.strategyExplanation || ""
  );
  const [instagramUrl, setInstagramUrl] = useState(initialPost?.instagramUrl || "https://www.instagram.com/");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      type,
      title,
      strategy,
      likes,
      comments,
      views,
      posterUrl,
      videoUrl,
      caption,
      strategyExplanation,
      instagramUrl,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-4 bg-card p-6 rounded-2xl border border-border shadow-lg animate-in fade-in">
      <div className="flex justify-between items-center border-b border-border pb-3">
        <h4 className="font-bold text-base text-foreground flex items-center gap-2">
          <Edit3 className="w-4 h-4 text-primary" />
          {initialPost ? "Editar Publicação" : "Nova Publicação"}
        </h4>

        <button type="button" onClick={onClose} className="p-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-foreground mb-1">Título da Publicação</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-foreground mb-1">Tipo de Conteúdo</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as any)}
            className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none font-bold"
          >
            <option value="video">Vídeo / Reel</option>
            <option value="carousel">Carrossel</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-foreground mb-1">Estratégia / Tag</label>
          <input
            type="text"
            required
            value={strategy}
            onChange={(e) => setStrategy(e.target.value)}
            className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-foreground mb-1">Número de Curtidas (ex: 12.4K)</label>
          <input
            type="text"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
            className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none font-mono"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-foreground mb-1">Número de Comentários (ex: 342)</label>
          <input
            type="text"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none font-mono"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-foreground mb-1">URL da Imagem de Capa (Poster)</label>
          <input
            type="text"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
            placeholder="/CLIENTES/..."
            className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none font-mono"
          />
        </div>

        {type === "video" && (
          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-foreground mb-1">URL do Vídeo (.mp4 ou .mov)</label>
            <input
              type="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="/CLIENTES/..."
              className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none font-mono"
            />
          </div>
        )}

        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-foreground mb-1 flex items-center gap-1">
            <FileText className="w-4 h-4 text-primary" />
            <span>Legenda da Postagem (Caption)</span>
          </label>
          <textarea
            rows={4}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Escreva a legenda completa que aparece no Instagram..."
            className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none font-sans"
          />
        </div>

        <div className="sm:col-span-2 bg-amber-500/10 p-4 rounded-xl border border-amber-500/30">
          <label className="block text-xs font-bold text-amber-400 mb-1 flex items-center gap-1">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>Explicação da Estratégia da Postagem</span>
          </label>
          <p className="text-[11px] text-amber-300/80 mb-2">
            Esta explicação aparecerá na aba "Estratégia" dentro do modal da postagem no portfólio.
          </p>
          <textarea
            rows={4}
            value={strategyExplanation}
            onChange={(e) => setStrategyExplanation(e.target.value)}
            placeholder="Explique detalhadamente por que este post foi criado, o público-alvo, os gatilhos mentais e o objetivo estratégico de conversão..."
            className="w-full px-3 py-2 text-sm bg-background border border-amber-500/40 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none text-foreground"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-foreground mb-1">Link Direto no Instagram</label>
          <input
            type="text"
            value={instagramUrl}
            onChange={(e) => setInstagramUrl(e.target.value)}
            className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none font-mono"
          />
        </div>
      </div>

      <div className="pt-4 flex justify-end gap-3 border-t border-border">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground text-xs font-bold transition-colors"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="px-6 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs shadow hover:opacity-90 transition-opacity flex items-center gap-1.5"
        >
          <Check className="w-4 h-4" />
          Salvar Publicação
        </button>
      </div>
    </form>
  );
}
