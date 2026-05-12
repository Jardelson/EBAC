import pandas as pd
import plotly.express as px
from dash import Dash, dcc, html

# Ler os dados
df = pd.read_csv('ecommerce_estatistica.csv')

# Criar aplicação
app = Dash(__name__)

# ====== GRÁFICOS ======

# Histograma
fig_hist = px.histogram(
    df,
    x='Preço',
    title='Histograma dos Preços'
)

# Dispersão
fig_disp = px.scatter(
    df,
    x='Preço',
    y='Qtd_Vendidos_Cod',
    title='Preço x Quantidade Vendida'
)

# Barra
fig_bar = px.bar(
    df.head(10),
    x='Marca',
    y='Qtd_Vendidos_Cod',
    title='Quantidade Vendida por Marca'
)

# Pizza
fig_pizza = px.pie(
    df,
    names='Temporada',
    title='Distribuição por Temporada'
)

# Mapa de calor
corr = df.corr(numeric_only=True)

fig_heat = px.imshow(
    corr,
    text_auto=True,
    title='Mapa de Calor das Correlações'
)

# Regressão
fig_reg = px.scatter(
    df,
    x='Preço',
    y='Qtd_Vendidos_Cod',
    trendline='ols',
    title='Regressão: Preço x Quantidade Vendida'
)

# Densidade
fig_density = px.density_contour(
    df,
    x='Preço',
    y='Qtd_Vendidos',
    title='Gráfico de Densidade'
)

# ====== LAYOUT ======

app.layout = html.Div([
    html.H1('Dashboard Ecommerce'),

    dcc.Graph(figure=fig_hist),
    dcc.Graph(figure=fig_disp),
    dcc.Graph(figure=fig_bar),
    dcc.Graph(figure=fig_pizza),
    dcc.Graph(figure=fig_heat),
    dcc.Graph(figure=fig_reg),
    dcc.Graph(figure=fig_density)
])

# Rodar aplicação
if __name__ == '__main__':
    app.run(debug=True)