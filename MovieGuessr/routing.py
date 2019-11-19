# MovieGuessr/routing.py
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.routing import ProtocolTypeRouter
import game.routing

application = ProtocolTypeRouter({
    # (http->django views is added by default)
        'websocket': AuthMiddlewareStack(
            URLRouter(
                game.routing.websocket_urlpatterns
            )
        ),
})